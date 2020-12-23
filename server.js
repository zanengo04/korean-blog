// if in development mode then use this to load in environment variable ********
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt= require('bcrypt')
const initializePassport = require('./passport-config')
const passport = require('passport')
const flash= require('express-flash')
const session= require('express-session')
const methodOverride = require('method-override')
const mysql = require('mysql');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "koreanschema"
});


db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MYsql connected');
});

function updateDB(){
    let sql = 'SELECT * FROM user';
    db.query(sql, async (err, result) =>{
        if(err) {throw err;
    } else{
        const users = await result
        return initializePassport(
            // this is the passport that is being configured
            passport,     //find user based on username
            username => users.find(user=> user.username === username),
            //find user based on id
            user_id => users.find(user=> user.id === user_id)
        )
    }})
}
updateDB()

// take things from forms online to use in post method later
app.use(express.urlencoded({extended: false}))

app.use(flash())

//pass in what the desire method override
app.use(methodOverride('_method'))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, // don't resolve session variable if nothing is changed
    saveUninitialized: false // don't save empty value in session
}))

app.use(passport.initialize())
app.use(passport.session())

//Set up static to public to refer to css file
app.use(express.static(__dirname + '/client/build'));
app.use(express.static(__dirname + '/public'));

//post to login page
//use passport middleware
app.post('/login', jsonParser, checkNotAuthenticated, passport.authenticate('local',{
    successRedirect: '/login',
    failureRedirect: '/login',
    failureFlash:true,
}))
app.get('/login', (req, res) => {
    req.isAuthenticated()? res.json(true):res.json(false)
})

app.post('/comment', jsonParser, (req,res) =>{
    //create a new user with the correct hashed password
    try {
        let comment = req.body.comment;
        console.log(comment)
        let sql = 'INSERT INTO comment (comment_content) VALUES (?)';
        db.query(sql, comment, (err, result) =>{
            if(err) throw err;
        });
        res.status(201).json({"some":"response"})
        console.log('success')
    } catch {
        console.log('fail')
        
        
    }
})

//post to register page
app.post('/register', jsonParser, checkNotAuthenticated, async (req,res) =>{
    //create a new user with the correct hashed password
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword)
        let userInfo = {username: req.body.username, password: hashedPassword, email:req.body.email};
        console.log(userInfo)
        let sql = 'INSERT INTO user SET ?';
        db.query(sql, userInfo, (err, result) =>{
            if(err) throw err;
        });
        res.status(201).json({"some":"response"})
        updateDB()
        console.log('success')
    } catch {
        console.log('fail')
        
        
    }
    
})
app.get('/blog', jsonParser, (req,res) =>{
    res.write('Hello')
    res.end()
})
function checkAuthenticated(req,res,next){
    //if the user is logged in then move on to the next function
    if(req.isAuthenticated()){
        return next()
    }
    //if the user is not logged in then redirect them home
    res.redirect('/login')
}


// disallowing user to do things when they're already log in
function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}


// log out. To call delete function, you need a form in html. But form only supports post function
// therefore method override library needs to be installed for it to be used
app.delete('/logout', (req,res) => {
    req.logOut() //function built into passport that sets up automatically to clear the session and log the user out    
    res.redirect('/login')
})

//set up port on port 5000
app.listen(process.env.PORT || 5000)
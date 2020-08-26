// if in development mode then use this to load in environment variable ********
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const util = require('util');
const express = require('express')
const app = express()
const bcrypt= require('bcrypt')
// use this to call things from other file
const initializePassport = require('./passport-config')
const passport = require('passport')
const flash= require('express-flash')
const session= require('express-session')
const methodOverride = require('method-override')
const mysql = require('mysql');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

//Create connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "koreanschema"
});


//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MYsql connected');
});

//use database for user instead later
function updateDB(){
    let sql = 'SELECT * FROM user';
    db.query(sql, async (err, result) =>{
        if(err) {throw err;
    } else{
        const users = await result
        initializePassport(
            // this is the passport that is being configured
            passport,     //find user based on username
            username => users.find(user=> user.username === username),
            //find user based on id
            user_id => users.find(user=> user.id === user_id)
        )
    }})
}
updateDB()
// set view engine to ejs
// app.set("view engine", "ejs");

// take things from forms online to use in post method later
app.use(express.urlencoded({extended: false}))

app.use(flash())

//pass in what the desire method override
app.use(methodOverride('_method'))
//session takes a bunch of options, one of which is secret. That is a key that need to be kept
// a secret because it is going to encrypt all the info. It's going to be taken from the
// environment variable. It can be set to anything but it should be randomly generated for security
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, // don't resolve session variable if nothing is changed
    saveUninitialized: false // don't save empty value in session
}))

app.use(passport.initialize()) //function inside of passport that is going to set up the "basics"
app.use(passport.session()) // to store variable in session

//Set up static to public to refer to css file
app.use(express.static(__dirname + '/client/build'));
app.use(express.static(__dirname + '/public'));


// //set up route to home page
// app.get('/', checkAuthenticated, (req,res) =>{
//     res.render('index.html', {name: req.user.username})
// })

//render to log in page

// app.get('/login', checkNotAuthenticated, (req,res) =>{
//     res.render('login.ejs')
//     // res.redirect('/login')
// })

//post to login page
//use passport middleware
app.post('/login', jsonParser, checkNotAuthenticated, passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true //allow us to have flash message that can be displayed to the user that is already set up
}))

//render to signup page

// app.get('/register', checkNotAuthenticated, (req,res) =>{
//     res.render('register.ejs')
//     // res.redirect('/register')
// })

//post to register page
app.post('/register', jsonParser, checkNotAuthenticated, async (req,res) =>{
    //create a new user with the correct hashed password
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword)
        let userInfo = {username: req.body.username, password: hashedPassword, email:req.body.email};
        let sql = 'INSERT INTO user SET ?';
        db.query(sql, userInfo, (err, result) =>{
            if(err) throw err;
        });
        //if the registration was successful then redirect the user
        res.redirect('/login')
        updateDB()
        
    } catch {
        // if there is a failure then...
        res.redirect('/register')
        
    }
    
})

//use to check if the user is logged in or not
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
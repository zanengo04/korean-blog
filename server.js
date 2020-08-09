const express = require('express')
const app = express()
const bcrypt= require('bcrypt')



//use database for user instead later
const users= []

// set view engine to ejs
app.set("view engine", "ejs");

// take things from forms online to use in post method later
app.use(express.urlencoded({extended: false}))


//Set up static to public to refer to css file
app.use(express.static(__dirname + '/public'));


//set up route to home page
app.get('/', (req,res) =>{
    res.render('index.ejs')
})

//render to log in page

app.get('/login', (req,res) =>{
    res.render('login.ejs')
})

//post to login page
app.post('/login', (req,res) =>{
    
})

//render to signup page

app.get('/register', (req,res) =>{
    res.render('register.ejs')
})
//post to register page
app.post('/register', async (req,res) =>{
    //create a new user with the correct hashed password
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            // if you have db then you don't need to worry about this. Maybe replace this later 
            id: Date.now().toString(),
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        //if the registration was successful then redirect the user
        res.redirect('/login')
        
    } catch {
        // if there is a failure then...
        res.redirect('/register')
        
    }
    console.log(users)
})

//set up port on port 3000
app.listen(3000)
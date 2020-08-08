const express = require('express')
const app = express()

//use database for user instead later
const user= []

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
app.post('/register', (req,res) =>{

})

//set up port on port 3000
app.listen(3000)
const express = require('express');
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

const app = express();

app.get('/add', (req,res) =>{
    let userInput = {title: 'Post One', body: 'This is the first post'};
    let sql = 'INSERT INTO user SET ?';
    let query = db.query(sql, userInput, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('Post Table created');
    });
});
// insert data

app.post('/register', jsonParser, (req,res) =>{
    let post = {username: req.body.username, password: req.body.password, email:req.body.email};
    let userInput = {username: 'w', password: 'w', email: 'w'};
    let user = req.body
    console.log('this is the user:', user)
    let sql = 'INSERT INTO user SET ?';
    db.query(sql, user, (err, result) =>{
        if(err) throw err;
    });
});

app.get('/login', (req,res) =>{
   
    let sql = 'SELECT * FROM user';
    db.query(sql, (err, result) =>{
        if(err) throw err;
    });
});

app.listen('5000', () => {
    console.log('Server started on port 5000');
});
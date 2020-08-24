const express = require('express');
const mysql = require('mysql');





//Create connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "nodemysql"
});


//connect

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MYsql connected');
});

const app = express();

//connect to html
app.use(express.static(__dirname + '/www'));




// create DB

app.get('/createdb', (req,res) =>{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('Database created');
    });
});

// create table

app.get('/table', (req,res) =>{
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('Post Table created');
    });
});

// insert data

app.get('/add', (req,res) =>{
    let post = {title: 'Post One', body: 'This is the first post'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('Post Table created');
    });
});


app.listen('3000', () => {
    console.log('Server started on port 3000');
});
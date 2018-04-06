var express = require("express");
var mysql = require("mysql");
var path = require("path");
var isempty = require('is-empty');
var bodyParser = require("body-parser");
var app = express();

//--------------------------------------------Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function (req, res, next) { // Test
    console.log('Time:', Date.now());
    next();
});

app.get('/hello', function (req, res) {// pfad localhost:30000/hello
    res.send("Hello World");
});
//-----------------------------------------------------------
//-----------------------------------------------------------
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "notenmanagement",
    dateStrings: true
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!")
});


app.listen(30000);
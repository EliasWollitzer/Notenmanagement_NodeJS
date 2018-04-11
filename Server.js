var express = require("express");
var mysql = require("mysql");
var path = require("path");
var isempty = require('is-empty');
var bodyParser = require("body-parser");
var app = express();

//--------------------------------------------Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

app.use(function (req, res, next) { // Test
    console.log('Time:', Date.now());
    next();
});

app.get('/hello', function (req, res) {// pfad localhost:30000/hello
    res.send("Hello World");
});

app.get('/api/getTestList', function (req, res) {
    console.log("getTestList");

    var sqlquery = "SELECT * FROM Ergebnis JOIN Tests JOIN Klasse " +
        "on ergebnis.Pid = Klasse.Pid and ergebnis.Tid = Tests.Tid;"
    // return table
    con.query(sqlquery, function (err, result) {
        if (err) throw err;
        console.log("Table Sent" + result);
        var x = JSON.stringify(result)
        var y = JSON.parse(x)
        console.log(y);
        res.send(y)
    });
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
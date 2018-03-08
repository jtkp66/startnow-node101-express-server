// import files and packages up here
//$.getJSON("data.json", function (data) {

// create your express server below
var express = ('express');
var app = express ();
var bodyParser = require('bpdy-parser');
res.statusCode = 200;
app.use(bodyParser.json());

app.use(express.static())

// add your routes and middleware below
var morgan = require("morgan");
app.use(morgan('dev'));
// finally export the express application
module.exports = app;
 //   });
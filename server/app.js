// import files and packages up here
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs')

// create your express server below
app.use(bodyParser.json());
app.use(express());

// add your routes and middleware below
var morgan = require('morgan');
app.use(morgan('dev')); 

app.get('/', (req, res) => {
    res.send('ok')
})

app.get('/data', function(req, res) {
    fs.readFile('server/data.json', 'utf8', (err, data) => {
        if(err) return console.log(err);
        res.json(data)
    })
})
// finally export the express application
module.exports = app;

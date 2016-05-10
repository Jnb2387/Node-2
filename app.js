var fs = require('fs')

// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
// var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
    var fileContents = fs.readFile('data.txt', function(err, data){
    res.send(data)
    res.header('Content-Type', 'text/html');
})
});


// Creating Server and Listening for Connections \\
var port = process.env.PORT
app.listen(port, function(){
  console.log('Server running on port ' + port);

})


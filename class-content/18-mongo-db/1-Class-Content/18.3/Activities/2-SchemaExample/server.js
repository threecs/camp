/* INSTRUCTOR ONLY (18.3.02)
 *
 * Show off the Mongoose Schema to class 
 * ===================================== */ 

// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose'); // our newest addition to the dependency family 

// configure the app to use body parser and morgan
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
// static file support with public folder
app.use(express.static('public'));


/* MONGOOSE FUN STARTS HERE */
/* -/-/-/-/-/-/-/-/-/-/-/-/ */

// here's how we hook mongoose with the mongodb database.
// Our database: week18day3mongoose
mongoose.connect('mongodb://localhost/week18day3mongoose');

// save our mongoose connection to db
var db = mongoose.connection;

// if there's a mongoose error, log it to console
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// once we "open" a connection to mongoose, tell the console we're in
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// And here's where we establish a connection to the collection.
// We bring the model in like any old module.
// Most of the magic with mongoose happens there.
//
// Example gets saved as a class, so we can create new Example objects
// and send them as validated, formatted data to our mongoDB collection.
var Example = require('./exampleModel.js');





// Routes
// ======

// simple index route
app.get('/', function(req, res) {
  res.send(index.html);
});

// We handle posts to our mongodb database here
app.post('/submit', function(req, res) {

	// Inserting an array and a boolean into the req.body object for example purposes
	req.body.array = ["item1", "item2", "item3"];
  // remember, we have to specify booleans on the server--the front-end can only send strings
	req.body.boolean = false;

  // We use the "Example" class we defined above 
  // to check our req.body against our Example model.
  var content = new Example(req.body);

  // with the new Example object created, we can save our data to mongoose.
  // notice the different syntax. The magic happens in exampleModel.js
  content.save(function(err, doc) {
    // send any errors to the browser
    if (err) {
      res.send(err);
    } 
    // otherwise, send the new doc to the browser
    else {
      res.send(doc);
    }
  });
});

// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});

/* Mongoose Example (Solution) (18.3.03)
 * ===================================== */ 

// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// configure app with morgan and boodyparser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
// use the public folder as a static dir
app.use(express.static('public'));



// Database configuration for mongoose
// db: week18day3mongoose
mongoose.connect('mongodb://localhost/week18day3mongoose');
// hook mongoose connection to db
var db = mongoose.connection;

// log any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// log a success message when we connect to our mongoDB collection with no issues
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Here's where we establish a connection to the collection.
// We bring the model in like any old module.
// Most of the magic with mongoose happens there.
//
// Example gets saved as a class, so we can create new Example objects
// and send them as validated, formatted data to our mongoDB collection.
var Example = require('./userModel.js');



// Routes
// ======

// simple index route
app.get('/', function(req, res) {
  res.send(index.html);
});

// route to post our form submission to mongoDB via mongoose 
app.post('/submit', function(req, res) {

  // We use the "Example" class we defined above 
  // to check our req.body against our user model.
  var user = new Example(req.body);

  // with the new "Example" object created, we can save our data to mongoose.
  // notice the different syntax. The magic happens in userModel.js
  user.save(function(err, doc) {
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
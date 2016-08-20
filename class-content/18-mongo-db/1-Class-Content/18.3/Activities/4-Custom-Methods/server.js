/* CUSTOM METHOD EXAMPLE  (18.3.04)
 * =============================== */ 


// **IMPORTANT** : Look at userModel.js
// to show the class the customMethods
// that this server file utilizes



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

// Require our userModel model
var Example = require('./userModel.js');



// Routes
// ======

// simple index route
app.get('/', function(req, res) {
  res.send(index.html);
});

// this route handles submissions of the form
app.post('/submit', function(req, res) {

  // make a user object with our model and the body of our request
  var user = new Example(req.body);



/* OUR CUSTOM METHODS 
 * (methods created in the userModel.js)
 * -/-/-/-/-/-/-/-/-/ */

  // coolifier method
  user.coolifier(function(err, name){
    // log errors
    if(err){
      console.log(err);
    } 
    // our log our cooliefied name
    else {
      console.log(name);
    }
  });

  // makeCool method
  user.makeCool(function(err, cool){
    // log any errors
    if(err){
      console.log(err);
    } 
    // or log what's cool
    else {
      console.log(cool);
    }
  });

// END OF CUSTOM METHODS
// =====================
// NORMAL METHOD BELOW

  // save a user to our mongoDB
  user.save(function(err, doc) {
    // send an error to the browser
    if (err) {
      res.send(err);
    } 
    // or send the doc to our browser
    else {
      res.send(doc);
    }
  });
});



// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});

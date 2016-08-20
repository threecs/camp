/* Custom Methods (Student) (18.3.5)
 * ===================================== */


/* INSTRUCTIONS:
 * 1: Go to userModel.js, and create custom methods 
 *    based on the details offered in the file.
 *
 * 2: Once you've made those custom methods, use them 
 *    in this file's POST request
 *
 *    Good luck!
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */



// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


// use morgan and bodyparser with our app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

// make public a static dir
app.use(express.static('public'));


// Database configuration with mongoose
mongoose.connect('mongodb://localhost/week18day3mongoose');
var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Require our userModel model
var Example = require('./userModel.js');


// Routes
app.get('/', function(req, res) {
  res.send(index.html);
});

app.post('/submit', function(req, res) {

  var user = new Example(req.body);



/* OUR CUSTOM METHODS 
 * (methods created in the userModel.js)
 * -/-/-/-/-/-/-/-/-/ */





 // TODO: Use our custom methods to create
 // the FullName and LastUpdatedDate entries
 // in the doc that the user submits. These 
 // will get saved to the mongoDB collecion.
 //
 // TIP: You must create these methods in the model.





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

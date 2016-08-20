/* Book Marker Warm Up (18.3.1)
 * backend
 * ==================== */ 


// STUDENTS: Your assisgnment is to define the routes below. Good luck!



// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

// configure our app for morgan and body parser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));

// static file support with public folder
app.use(express.static('public'));

// mongojs configuration
var mongojs = require('mongojs');
var databaseUrl = "week18day3";
var collections = ["books"];

// hook our mongojs config to the db var
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});



// Routes
// ======

// simple index route
app.get('/', function(req, res) {
  res.send(index.html);
});


// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// Post a book to the mongoose database
app.post('/submit', function(req, res) {

  // save the request body as an object called book
  var book = req.body;

  // if we want the object to have a boolean value of false, 
  // we have to do it here, because the ajax post will convert it 
  // to a string instead of a boolean
  book.read = false;

});


// find all books marked as read
app.get('/read', function(req, res) {

});


// find all books marked as unread
app.get('/unread', function(req, res) {

});


// mark a book as having been read
app.get('/markread/:id', function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in 
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

});


// mark a book as having been read
app.get('/markunread/:id', function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in 
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

});


// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});

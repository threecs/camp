/* Note Taker (18.2.6)
 * backend
 * ==================== */ 

// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan'); // logs SAFDSADFdfsFdfsSDFSDSFdsfdsfdFSDFSDFSDFSDfdsfd

// set the app up with morgan, body-parser, and a static folder
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static('public'));

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "week18day2";
var collections = ["notes"];

// hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// log any mongojs errors to console
db.on('error', function(err) {
  console.log('Database Error:', err);
});


// Routes
// ======

// Simple index route
app.get('/', function(req, res) {
  res.send(index.html);
});

// Handle form submission, save submission to mongo
app.post('/submit', function(req, res) {
  console.log(req.body);
  // insert the note into the notes collection
  db.notes.insert(req.body, function(err, saved) {
    // log any errors
    if (err) {
      console.log(err);
    } 
    // otherwise, send the note back to the browser.
    // this will fire off the success function of the ajax request
    else {
      res.send(saved);
    }
  });
});

// Retrieve results from mongo
app.get('/all', function(req, res) {
  // find all notes in the notes collection
  db.notes.find({}, function(err, found) {
    // log any errors
    if (err) {
      console.log(err);
    } 
    // otherwise, send json of the notes back to user.
    // this will fire off the success function of the ajax request
    else {
      res.json(found);
    }
  });
});

// Select just one note by an id
app.get('/find/:id', function(req, res){

	// when searching by an id, the id needs to be passed in 
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

  // find just one result in the notes collection
	db.notes.findOne({
    // using the id in the url
		'_id': mongojs.ObjectId(req.params.id)
	}, function(err, found){
    // log any errors
		if (err) {
			console.log(err);
			res.send(err);
		} 
    // otherwise, send the note to the browser.
    // this will fire off the success function of the ajax request
    else {
			console.log(found);
			res.send(found);
		}
	});
});


// Update just one note by an id
app.post('/update/:id', function(req, res) {
	
  // when searching by an id, the id needs to be passed in 
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

  // update the note that matches the object id
  db.notes.update({
    '_id': mongojs.ObjectId(req.params.id)
  }, {
    // set the title, note and modified parameters
    // sent in the req's body.
    $set: {
			'title': req.body.title,
      'note': req.body.note,
			'modified': Date.now()
    }
  }, function(err, edited) {
    // log any errors from mongojs
    if (err) {
      console.log(err);
			res.send(err);
    } 
    // othewise, send the mongojs response to the browser.
    // this will fire off the success function of the ajax request
    else {
      console.log(edited);
			res.send(edited);
    }
  });
});


// Delete One from the DB
app.get('/delete/:id', function(req, res) {
  // remove a note using the objectID
  db.notes.remove({
    "_id": mongojs.ObjectID(req.params.id)
  }, function(err, removed) {
    // log any errors from mongojs
    if (err) {
      console.log(err);
			res.send(err);
    } 
    // otherwise, send the mongojs response to the browser.
    // this will fire off the success function of the ajax request
    else {
      console.log(removed);
      res.send(removed);
    }
  });
});


//Clear the DB
app.get('/clearall', function(req, res) {
  // remove every note from the notes collection
	db.notes.remove({}, function(err, response){
    // log any errors to the console
		if (err){
			console.log(err);
			res.send(err);
		} 
    // otherwise, send the mongojs response to the browser.
    // this will fire off the success function of the ajax request
    else {
			console.log(response);
			res.send(response);
		}
	});
});


// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});
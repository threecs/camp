// Making an Express server available
var express = require('express');
var app = express();

// Adding in the components of the mysql library. Outlining the parameters tied to the mysql db
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'seinfeld'
});

// Connecting the mysql database mentioned above
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/cast', function(req, res) {
    connection.query('SELECT * FROM actors order by id', function(err, result) {

      var html = '<h1> Actors Ordered BY ID </h1>';

      html += '<ul>'

      // Use the data from the database to populate an HTML file
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>';
        html += '<p> Name: ' + result[i].name + ' </li>';
        html += '<p> Coolness Points: ' + result[i].coolness_points + ' </p>';
        html += '<p>Attitude: ' + result[i].attitude + ' </p></li>';
      };

      html += '</ul>'

      // Send the html to the browser
      res.send(html);
  });
});

app.get('/coolness-chart', function(req, res) {
    connection.query('SELECT * FROM actors order by coolness_points DESC', function(err, result) {

      var html = '<h1> Actors by Coolness </h1>';

      html += '<ul>'

      // Use the data from the database to populate an HTML file
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>';
        html += '<p> Name: ' + result[i].name + ' </li>';
        html += '<p> Coolness Points: ' + result[i].coolness_points + ' </p>';
        html += '<p>Attitude: ' + result[i].attitude + ' </p></li>';
      };

      html += '</ul>'

      // Send the html to the browser
      res.send(html);
  });
});

app.get('/attitude-chart/:att', function(req, res) {
    connection.query('SELECT * FROM actors where attitude = ?', [req.params.att], function(err, result) {

      var html = '<h1> Actors With an Attitude of ' + req.params.att + '</h1>';

      html += '<ul>'

      // Use the data from the database to populate an HTML file
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>';
        html += '<p> Name: ' + result[i].name + ' </li>';
        html += '<p> Coolness Points: ' + result[i].coolness_points + ' </p>';
        html += '<p>Attitude: ' + result[i].attitude + ' </p></li>';
      };

      html += '</ul>'

      // Send the html to the browser
      res.send(html);
  });
});


// Telling the server to run
var port = 3000;
app.listen(port);
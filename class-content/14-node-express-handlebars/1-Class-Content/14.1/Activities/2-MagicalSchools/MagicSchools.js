//inside of the Terminal
//npm install mysql --save

// Making an Express server available
var express = require('express');
var app = express();

// Adding in the components of the mysql library. Outlining the parameters tied to the mysql db
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wizard_schools_db'
});

// Connecting the mysql database mentioned above
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/', function(req, res) {
    connection.query('SELECT * FROM schools', function(err, result) {

      var html = '<h1> Magical Schools </h1>';

      html += '<ul>'

      // Use the data from the database to populate an HTML file
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>';
        html += '<p>School: ' + result[i].name + ' </p></li>';
      };

      html += '</ul>'

      // Send the html to the browser
      res.send(html);
  });
});

// Telling the server to run
var port = 3000;
app.listen(port);

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quotes_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
})

//this is server.js
app.get('/', function(req, res) {
    connection.query('SELECT * FROM quotes;', function(err, data) {
        if (err) throw err;
        res.render('index', {
            quotes: data
        });
    });
});

app.post('/create', function(req, res) {
    connection.query('INSERT INTO quotes (author, quote) VALUES (?, ?)', [req.body.author, req.body.quote], function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
});

app.delete('/delete', function(req, res) {
    connection.query('DELETE FROM quotes WHERE id = ?', [req.body.id], function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
});

//show the user the individual quote and the form to update the quote
app.get('/quotes/:id', function(req, res) {
    connection.query('SELECT * FROM quotes where id = ?', [req.params.id], function(err, data) {
        if (err) throw err;
        console.log(data)
        res.render('single_quote', data[0]);
    });
});

//updates a quote by an id and then redirects to the root route
app.put('/update/:id', function(req, res) {
    connection.query('UPDATE quotes SET author = ?, quote = ? WHERE id = ?', [req.body.author, req.body.quote, req.params.id], function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
});

var port = 3000;
app.listen(port, function() {
    console.log("Listening on PORT " + port);
});
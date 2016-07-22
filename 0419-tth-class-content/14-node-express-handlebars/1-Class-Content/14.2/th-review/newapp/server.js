var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var names = [];

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/create', function(req, res){
	names.push(
	{
		first_name: req.body.first_name,
		last_name: req.body.last_name
	});
	res.json(names);
});

app.listen(3000, function(){
	console.log("Listening on Port 3000");
});
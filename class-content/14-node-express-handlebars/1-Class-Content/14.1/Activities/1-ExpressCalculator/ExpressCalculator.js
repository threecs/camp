var express = require("express");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(3002);

app.get('/:username', function(req, res) {
    res.send('Profile of ' + req.params.username);
});

app.get('/:operation/:firstNum/:secondNum', function(req, res) {

    var operation = req.params.operation;
    var firstNum = parseInt(req.params.firstNum);
    var secondNum = parseInt(req.params.secondNum);
    var result;

    if (operation == "add") {
        result = firstNum + secondNum;
    } else if (operation == "subtract") {
        result = firstNum - secondNum;
    } else if (operation == "multiply") {
        result = firstNum * secondNum;
    } else if (operation == "divide") {
        result = firstNum / secondNum;
    }

    res.send(result.toString());
});
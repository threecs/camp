//Create dependency for "request" npm package
var request = require('request');

var options = {
    uri: 'http://www.colourlovers.com/api/colors/random&format=json',
    json: true // Automatically parses the JSON string in the response
};

//Initialize color so that it is a global variable
var color;

//Create a request to the "colourlovers" api which will select a random color from their database and which will return its value within the "response.body"
request(options, function(error,response,body){
  console.log("Request is being made...");
  color = response.body[0].title;
})

//Print the color's title to the screen (???)
console.log("Instance of " + color);
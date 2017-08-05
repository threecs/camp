var request = require('request');
var twitter = require('twitter');
var keys = require('./keys.js');

var command = process.argv[2];
//console.log(command);

switch(command)
{
	case 'my-tweets':
		getTweets();
	break;
	case 'spotify-this-song':
		//getSpotify();
	break;
	case 'movie-this':
		//getOmdb();
	break;
	case 'random':
		//getRandom();
	break;
};

function getTweets(){
	var client = new twitter(keys.twitterKeys);
	var params = {screen_name: 'rogerle'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
  	if (!error) {
    console.log(tweets);
  }
});
}


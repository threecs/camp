var keys = require('./keys.js') //alternative to environment variables
var Twitter = require('twitter'); //connects to your twitter
var spotify = require('spotify'); //spotify api
var request = require('request'); //allows ajax requests
var fs = require('fs'); //reads and writes files

var getArtistNames = function(artist){
	return artist.name;
}

var getMeSpotify = function(songName){

	if (songName === undefined){
		songName = 'What\'s my age again';
	}
	 
	spotify.search({ type: 'track', query: songName }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 	//debugger; //used to find out what's inside data in the iron-node console

	    var songs = data.tracks.items;

	    for(var i = 0; i < songs.length; i++){
	    	console.log(i);
	    	console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
	    	console.log('song name: ' + songs[i].name);
	    	console.log('preview song: ' + songs[i].preview_url);
	    	console.log('album: ' + songs[i].album.name);
	    	console.log('-----------------------------------');
	    }
	});
}

var getMyTweets = function(){
	 
	var client = new Twitter(keys.twitterKeys);
	 
	var params = {screen_name: 'inrtracker'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	    //console.log(tweets);
	  	//debugger; //used to find out what's inside tweets in the iron-node console
	  	for(var i=0; i < tweets.length; i++){
	  		console.log(tweets[i].created_at);
	  		console.log('');
	  		console.log(tweets[i].text);
	  	}
	  }
	});	
}

var getMeMovie = function(movieName){

	if (movieName === undefined){
		movieName = 'Mr Nobody';
	}

	var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";

	request(urlHit, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	var jsonData = JSON.parse(body);

	    console.log('Title: ' + jsonData.Title);
	    console.log('Year: ' + jsonData.Year);
	    console.log('Rated: ' + jsonData.Rated);
	    console.log('IMDB Rating: ' + jsonData.imdbRating);
	    console.log('Country: ' + jsonData.Country);
	    console.log('Language: ' + jsonData.Language);
	    console.log('Plot: ' + jsonData.Plot);
	    console.log('Actors: ' + jsonData.Actors);
	   	console.log('Rotten Tomatoes Rating: ' + jsonData.tomatoRating);
	    console.log('Rotton Tomatoes URL: ' + jsonData.tomatoURL);
	  }
	});

}

var doWhatItSays = function(){
	fs.readFile("random.txt", "utf8", function(error, data) {
		console.log(data);
		//debugger; //use to see what data looks like
		
		var dataArr = data.split(',')

		if (dataArr.length == 2){
			pick(dataArr[0], dataArr[1]);
		}else if (dataArr.length == 1){
			pick(dataArr[0]);
		}
		
	});
}

var pick = function(caseData, functionData){
	switch(caseData) {
	    case 'my-tweets':
	        getMyTweets();
	        break;
	    case 'spotify-this-song':
	        getMeSpotify(functionData);
	        break;
	    case 'movie-this':
	    	getMeMovie(functionData);
	    	break;
	    case 'do-what-it-says':
	    	doWhatItSays();
	    	break;
	    default:
	        console.log('LIRI doesn\'t know that');
	}
}

// run this on load of js file
var runThis = function(argOne, argTwo){
	pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);
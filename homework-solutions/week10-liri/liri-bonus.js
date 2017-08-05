var keys = require('./keys.js') //alternative to environment variables
var Twitter = require('twitter'); //connects to your twitter
var spotify = require('spotify'); //spotify api
var request = require('request'); //allows ajax requests
var fs = require('fs'); //reads and writes files

var writeToLog = function(data){
	fs.appendFile("log.txt", '\r\n\r\n'); 

	fs.appendFile("log.txt", JSON.stringify(data), function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("log.txt was updated!");
	}); 
}

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
	    var data = [];

	    for(var i = 0; i < songs.length; i++){
	    	data.push({ 
		    	'artist(s)' : songs[i].artists.map(getArtistNames),
		    	'song name: ' : songs[i].name,
		    	'preview song: ' : songs[i].preview_url,
		    	'album: ' : songs[i].album.name
		    });
	    }

	    console.log(data);
	    writeToLog(data);
	});
}

var getMyTweets = function(){
	 
	var client = new Twitter(keys.twitterKeys);
	 
	var params = {screen_name: 'inrtracker'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	    //console.log(tweets);
	  	//debugger; //used to find out what's inside tweets in the iron-node console

	  	var data = [];

	  	for(var i=0; i < tweets.length; i++){
	  		data.push({
	  			created_at: tweets[i].created_at,
	  			text: tweets[i].text
	  		});
	  	}

	  	console.log(data);
	  	writeToLog(data);
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

	  	var data = {
	  		 'Title:' : jsonData.Title,
	  		 'Year:' : jsonData.Year,
	  		 'Rated:' : jsonData.Rated,
	  		 'IMDB Rating:' : jsonData.imdbRating,
	  		 'Country:' : jsonData.Country,
	  		 'Language:' : jsonData.Language,
	  		 'Plot:' : jsonData.Plot,
	  		 'Actors:' : jsonData.Actors,
	  			'Rotten Tomatoes Rating:' : jsonData.tomatoRating,
	  		 'Rotton Tomatoes URL:' : jsonData.tomatoURL
	  	};

	  	console.log(data);
	  	writeToLog(data);
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
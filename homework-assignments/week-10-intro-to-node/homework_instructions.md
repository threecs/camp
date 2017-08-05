#Week 10 (LIRI Bot)

### Introduction

* You will make LIRI. LIRI is like SIRI (from an iphone).

* SIRI is a Speech Interpretation and Recognition Interface

* LIRI is a Language Interpretation and Recognition Interface.

* LIRI will be a command line node app that takes in parameters and gives you back data.

* see demonstration of how it works * 

### Steps

0. Make a twitter account if you don't already have one and post a few tweets

1. Make a new github repository called liri-node-app

2. Make a .gitignore file

Add the following to it.

```
keys.js
node_modules
.DS_Store
```
* You don't need .DS_Store in the .gitignore file if you're on a Windows Machine.

3. Make a JavaScript file named keys.js

Inside keys.js your file will look like this:

``` JavaScript
console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}

```
4. Get your Twitter API creds by following these steps:

* Step One: https://apps.twitter.com/app/new
* Step Two: use http:// for your urls
* Step Three: then go to Keys and Access Tokens to get your credentials for below
* Step Four: then you have to click the button below on that page to create an access token

After you get those credentials fill in the <input here> portions in the keys.js file.

5. Make a file called random.txt

* inside of random.txt put the following in with no extra characters or white space:

```
spotify-this-song,"I Want it That Way"
```

6. Make a JavaScript file named liri.js

7. At the top of the liri.js file make it so you grab the data from keys.js and store it into a variable to use

8. Make it so liri.js can take in one of the following arguments

* my-tweets

* spotify-this-song

* movie-this

* do-what-it-says

So if you succeed, running the following commands in your terminal will do the followig things

```
node liri.js my-tweets
```
* will show your last 20 tweets and when they were created at in the terminal

```
node liri.js spotify-this-song '<song name here>'
```

* shows the following information about the song in the terminal

	* artist(s)
	* song name
	* preview link of the song from spotify
	* album that the song is a part of
	* song name

* if no song is provided then your program will default to
	* "what's my age again" by blink 182

```
node liri.js movie-this '<movie name here>'
```

* this would output the following information to the terminal:

	* Title
	* Year
	* IMDB Rating
	* Country
	* Language
	* Plot
	* Actors
	* Rotten Tomatoes Rating 
	* Rotton Tomatoes UrL

	* if no movie is provided then the program will output information for the movie: 'Mr. Nobody'
		* if you haven't watched Mr. Nobody then you should: http://www.imdb.com/title/tt0485947/
		* You can catch it on Netflix

```
node liri.js do-what-it-says 
```

* Using the fs package in node, the program would take the text inside of random.txt and use it to call the first command with the second part as it's parameter

* Currently in random.txt, the following text is there:

```
spotify-this-song,"I Want it That Way"
```

* so according to those instructions, you would  call the appropriate function and pass in "I Want it That Way" as the song.

* This should work for any function and paramter you use.

9. To get the data for the above things you'll have to use the following npm packages:

* [twitter](https://www.npmjs.com/package/twitter)
* [spotify](https://www.npmjs.com/package/spotify)
* [request](https://www.npmjs.com/package/request)
	* The request npm package will be used to hit the OMDB API
		* [OMDB API](http://www.omdbapi.com)

* to install these npm packages run these commands one at a time.

```
npm install twitter
npm install spotify
npm install request
```

# BONUS

* In addition to outputting the data to the terminal, also output all data to a txt file called log.txt

* Make sure that each command you run gets appended to the log.txt file. 

* Your log.txt file should not be overwritten each time you run a command.

------

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.

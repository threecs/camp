/* Scraper: Server #3  (18.2.1) 
 * ========================= */

// Dependencies:
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html


// first, tell the console what server3.js is doing
console.log("\n******************************************\n" +
            "Look at the image of every award winner in \n" +
            "one of the pages of awwwards.com. Then,\n" +
            "grab the image's source url." +
            "\n******************************************\n")


// run request to grab the html from awwards's clean website section
request("http://www.awwwards.com/websites/clean/", function (error, response, html) {
  
  // load the html into cheerio
  var $ = cheerio.load(html);

  // make an empty array for saving our scraped info
  var result = [];

  // with cheerio, look at each award-winning site, 
  // enclosed in "figure" tags with the class name "site"
  $("figure.site").each(function(i, element){
  	

  	/* Cheerio's find method will "find" the first matching child element in a parent.
  	 *    We start at the current element, then "find" its first child a-tag.
  	 *    Then, we "find" the lone child img-tag in that a-tag. 
  	 *    Then, .attr grabs the imgs src value.
  	 * So: <figure>  ->  <a>  ->  <img src="link">  ->  "link"  */
  	var imgLink = $(element).find('a').find('img').attr("src");

  	// push the image's url (saved to the imgLink var) into the result array
  	result.push({"Link": imgLink});
  });

  // with each link scraped, log the result to the console
  console.log(result);
});

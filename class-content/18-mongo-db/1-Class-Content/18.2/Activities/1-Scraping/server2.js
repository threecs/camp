/* Scraper: Server #2  (18.2.1) 
 * ========================= */

// Dependencies:
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html


// first, tell the console what server2.js is doing
console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the NHL website:" +
            "\n******************************************\n")


// make a request call for nhl.com's homepage 
request('https://www.nhl.com/', function (error, response, html) {

  // load the body of the html into cheerio
  var $ = cheerio.load(html);

  // an empty array to save our scraped data
  var result = [];

  // With cheerio, find each h4-tag with the class "headline-link"
  $('h4.headline-link').each(function(i, element){

      // save the text of the h4-tag as "title"
      var title = $(this).text();

      // find the h4 tag's parent a-tag, 
      // and save it's href value as "link"
      var link = $(element).parent().attr('href');
      
      // for each h4-tag, make an object with data we scraped
      // and push it to the result array
      result.push({
        title:title,
        link:link
      });
    });

  // after the program scans each h4.headline-link, log the result
  console.log(result);
});

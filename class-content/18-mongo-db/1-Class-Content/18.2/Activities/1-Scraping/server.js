/* Scraper: Server #1  (18.2.1) 
 * ========================= */

// Dependencies:
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html


// first, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");


// Now, make a request call for the "webdev" board on reddit. 
// Notice: the page's html gets saved as the callback's third arg
request('https://www.reddit.com/r/webdev', function (error, response, html) {
  
  // Load the html into cheerio and save it to a var.
  // '$' becomes a shorthand for cheerio's selector commands, 
  //  much like jQuery's '$'.
  var $ = cheerio.load(html);

  // an empty array to save the data that we'll scrape
  var result = [];

  // With cheerio, find each p-tag with a "title" class
  // (i: iterator. element: the current element)
  $('p.title').each(function(i, element){

      // save the text of the element (this) in a "title" variable
      var title = $(this).text();

      // In the currently selected element, 
      // look at its child elements (i.e., its a-tags),
      // then save the values for any "href" attributes 
      // that the child elements may have
      var link = $(element).children().attr('href');
      
      // save these results in an object that we'll push
      // into the result array we defined earlier
      result.push({
        title:title,
        link:link
      });
    });

  // log the result once cheerio analyzes each of its selected elements
  console.log(result);
});
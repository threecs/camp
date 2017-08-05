//The url library allows us to parse parts of the request url.
var url = require('url');

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

//We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var url_parts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (url_parts.pathname) {
    case '/':
      display_root(url_parts.pathname, req, res);
      break;
    case '/portfolio':
      display_portfolio(url_parts.pathname, req, res);
      break;
    case '/edit':
      sys.puts("display edit");
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

// When we visit the 'http://localhost:8080/' path, this function is run.
function display_root(url, req, res) {
  var myHTML = '<html>';
  myHTML += '<body><h1>Home Page</h1>';
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

// When we visit the 'http://localhost:8080/portfolio' path, this function is run.
function display_portfolio(url, req, res) {
  var myHTML = '<html>';
  myHTML += '<body><h1>My Portfolio</h1>';
  myHTML += "<a href='/'>Go Home</a>";
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

// When we visit any path that is not specifically defined, this function is run.
function display_404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}
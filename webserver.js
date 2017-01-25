/**
 * Created by yopat on 2017-01-25.
 */

// First node page to load in a browser

// reference http library that ships inn node

var http = require('http');

// start a http server asynchronously
http.createServer(function(request, response){
    // send a response

    response.writeHead(200);
    response.write('<h1>Our second javascript page using nodemon </h1>');
    response.end();

}).listen(3000);

// display a message
console.log('Server running on port 3000');
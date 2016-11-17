var express = require('express');
var lyrics = require('./lyrics');

var app = express();


// respond with "Hello World!" on the homepage
app.get('/api/lyrics', function (req, res) {
//res.send('Hello World!');
es.send(lyrics);
});
var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);
});


/*http.createServer(function(request, response) {
  var chosenString = lyrics[Math.floor(Math.random()*lyrics.length)];

  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(chosenString);
  response.end();
}).listen(1234); //this is the port the server is on; can be 8888 or 8080 for localhost*/

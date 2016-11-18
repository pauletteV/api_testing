var express = require('express');
var lyrics = require('./lyrics');

var app = express();


app.get('/fullLyrics', function (req, res) {
	res.send(lyrics);
});

app.get('/randomlyrics', function (req, res) {
	var chosenString = lyrics[Math.floor(Math.random()*lyrics.length)];
	res.send(chosenString);
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});

app.use(express.static(__dirname + '/public'));
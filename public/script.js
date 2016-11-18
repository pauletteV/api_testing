// script.js, any js file that might perform AJAX operations
var lyric = '';

	$.get('/randomlyrics').success(function(data){
	lyric = data;
	console.log(lyric);
});
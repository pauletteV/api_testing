// script.js, any js file that might perform AJAX operations
var lyric = '';

	$.get('/api/lyric').success(function(data){
	lyric = data;
	console.log(lyric);
});
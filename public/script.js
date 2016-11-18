// script.js, any js file that might perform AJAX operations
var lyric = '';

$.get('/randomlyrics', function(data){
		lyric = data;

	$('#randomLyric').text(lyric);
	
});
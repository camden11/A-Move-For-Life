function convertPos(pos) {
	var pixels = -pos*100;
	return pixels.toString() + "%";
}

$(document).ready(function() {

	var artistLimit = 3;
	var artistPos = 0;

	$('.artist-left').click(function() {
		if (artistPos > 0) {
			artistPos = artistPos - 1;
			$('.artists').animate({left: convertPos(artistPos)});
			console.log(convertPos(artistPos));
		}
	});

	$('.artist-right').click(function() {
		if (artistPos < artistLimit) {
			artistPos = artistPos + 1;
			$('.artists').animate({left: convertPos(artistPos)});
			console.log(convertPos(artistPos));
		}
	});
});
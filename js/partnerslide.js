function convertPos(pos) {
	var pixels = -pos*100;
	return pixels.toString() + "%";
}

$(document).ready(function() {

	var artistLimit = 3;
	var artistPos = 0;

	$('.artist-left').click(function() {
		if (artistPos == 1) {
			$('.artist-left').css({"opacity": "0", "cursor": "auto"});
		}
		if (artistPos == artistLimit) {
			$('.artist-right').css({"opacity": "1", "cursor": "pointer"});
		}
		if (artistPos > 0) {
			artistPos = artistPos - 1;
			$('.artists').animate({left: convertPos(artistPos)});
		}
	});

	$('.artist-right').click(function() {
		if (artistPos == 0) {
			$('.artist-left').css({"opacity": "1", "cursor": "pointer"});
		}
		if (artistPos == artistLimit - 1) {
			$('.artist-right').css({"opacity": "0", "cursor": "auto"});
		}
		if (artistPos < artistLimit) {
			artistPos = artistPos + 1;
			$('.artists').animate({left: convertPos(artistPos)});
		}
	});

	var sponsorLimit = 3;
	var sponsorPos = 0;

	$('.sponsor-left').click(function() {
		if (sponsorPos == 1) {
			$('.sponsor-left').css({"opacity": "0", "cursor": "auto"});
		}
		if (sponsorPos == sponsorLimit) {
			$('.sponsor-right').css({"opacity": "1", "cursor": "pointer"});
		}
		if (sponsorPos > 0) {
			sponsorPos = sponsorPos - 1;
			$('.sponsors').animate({left: convertPos(sponsorPos)});
		}
	});

	$('.sponsor-right').click(function() {
		if (sponsorPos == 0) {
			$('.sponsor-left').css({"opacity": "1", "cursor": "pointer"});
		}
		if (sponsorPos == sponsorLimit - 1) {
			$('.sponsor-right').css({"opacity": "0", "cursor": "auto"});
		}
		if (sponsorPos < sponsorLimit) {
			sponsorPos = sponsorPos + 1;
			$('.sponsors').animate({left: convertPos(sponsorPos)});
		}
	});

	var charityLimit = 1;
	var charityPos = 0;

	$('.charity-left').click(function() {
		if (charityPos == 1) {
			$('.charity-left').css({"opacity": "0", "cursor": "auto"});
		}
		if (charityPos == charityLimit) {
			$('.charity-right').css({"opacity": "1", "cursor": "pointer"});
		}
		if (charityPos > 0) {
			charityPos = charityPos - 1;
			$('.charities').animate({left: convertPos(charityPos)});
		}
	});

	$('.charity-right').click(function() {
		if (charityPos == 0) {
			$('.charity-left').css({"opacity": "1", "cursor": "pointer"});
		}
		if (charityPos == charityLimit - 1) {
			$('.charity-right').css({"opacity": "0", "cursor": "auto"});
		}
		if (charityPos < charityLimit) {
			charityPos = charityPos + 1;
			$('.charities').animate({left: convertPos(charityPos)});
		}
	});
});
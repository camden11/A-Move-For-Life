$(document).ready(function() {

	var upcoming = true;

	$('#upcoming').click(function() {
		if (!upcoming) {
			upcoming = true;
			$(this).toggleClass("active-button");
			$(this).toggleClass("inactive-button");
			$('#past').toggleClass("active-button");
			$('#past').toggleClass("inactive-button");
			$('#past-event-wrapper').css("visibility", "visible");
			$('#past-event-wrapper').css("opacity", "1");
		}
	});

	$('#past').click(function() {
		if (upcoming) {
			upcoming = false;
			$(this).toggleClass("active-button");
			$(this).toggleClass("inactive-button");
			$('#upcoming').toggleClass("active-button");
			$('#upcoming').toggleClass("inactive-button");
			$('#past-event-wrapper').css("visibility", "hidden");
			$('#past-event-wrapper').css("opacity", "0");
		}
	});
});
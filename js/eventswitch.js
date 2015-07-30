$(document).ready(function() {

	var upcoming = true;

	$('#upcoming').click(function() {
		if (!upcoming) {
			upcoming = true;
			$(this).toggleClass("active-button");
			$(this).toggleClass("inactive-button");
			$('#past').toggleClass("active-button");
			$('#past').toggleClass("inactive-button");
			$('#upcoming-event-wrapper').toggleClass('fadein');
			$('#upcoming-event-wrapper').toggleClass('fadeout');
			$('#upcoming-event-wrapper').css('position', 'relative');
			$('#upcoming-event-wrapper').css('opacity', '1');
			$('#upcoming-event-wrapper').css('z-index', '3');
			$('#event-footer').css('display', 'block')
			$('#past-event-wrapper').toggleClass('fadein');
			$('#past-event-wrapper').toggleClass('fadeout');
			$('#past-event-wrapper').css('opacity', '0');
			$('#past-event-wrapper').css('z-index', '0');
			$('#past-event-wrapper').css('position', 'fixed');
		}
	});

	$('#past').click(function() {
		if (upcoming) {
			upcoming = false;
			$(this).toggleClass("active-button");
			$(this).toggleClass("inactive-button");
			$('#upcoming').toggleClass("active-button");
			$('#upcoming').toggleClass("inactive-button");
			$('#past-event-wrapper').toggleClass('fadein');
			$('#past-event-wrapper').toggleClass('fadeout');
			$('#past-event-wrapper').css('position', 'relative');
			$('#past-event-wrapper').css('opacity', '1');
			$('#past-event-wrapper').css('z-index', '3');
			$('#event-footer').css('display', 'none')
			$('#upcoming-event-wrapper').toggleClass('fadein');
			$('#upcoming-event-wrapper').toggleClass('fadeout');
			$('#upcoming-event-wrapper').css('position', 'fixed');
			$('#upcoming-event-wrapper').css('opacity', '0');
			$('#upcoming-event-wrapper').css('z-index', '0');
		}
	});
});
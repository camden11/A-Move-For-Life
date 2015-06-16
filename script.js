//Takes hex color as string
$(document).ready(function() {

	$('#slideout').click(function() {
		$('.slideout-menu').animate({left: '0%'}, 'fast');
		$('.back').animate({left: '50%'}, 'fast');
		$('body').animate({marginLeft: '50%'}, 'fast');
	});


	$('.back').click(function() {
		$('.slideout-menu').animate({left: '-50%'}, 'fast');
		$('.back').animate({left: '100%'}, 'fast');
		$('body').animate({marginLeft: '0%'}, 'fast');
	});
});
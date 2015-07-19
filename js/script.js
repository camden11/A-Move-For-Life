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

	$('.footer-img').hover(function() {
		var src = $(this).attr("src").match(/[^\.]+/) + "_hover.png";
		$(this).attr("src", src);
	},
	function() {
		var src = $(this).attr("src").replace("_hover.png", ".png");
		$(this).attr("src", src);
	});

	$('.footer-img').click(function() {
		var src = $(this).attr("src").replace("_hover.png", ".png");
		$(this).attr("src", src);
	});
});
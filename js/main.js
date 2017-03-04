$( document ).ready(function() {
	$(window).scroll(function() {
	    if ($(document).scrollTop() > 300) {
	        console.log("make main-nav visible here");
	        $('.main-nav').addClass('main-nav--is-visible');

	    } else {
	    	$('.main-nav').removeClass('main-nav--is-visible');
	    }
	});
});

$( document ).ready(function() {
	
	// main navigation visibility on scroll
	$(window).scroll(function() {
	    if ($(document).scrollTop() > 300) {
	        console.log("make main-nav visible here");
	        $('.main-nav').addClass('main-nav--is-visible');

	    } else {
	    	$('.main-nav').removeClass('main-nav--is-visible');
	    }
	});

	// skills-circle
	$('.skills-circle').percentcircle({

		animate : true,
		diameter : 100,
		guage: 20,
		coverBg: '#fff',
		bgColor: '#939393',
		fillColor: '#F7CE3E',
		percentSize: '15px',
		percentWeight: 'normal'

	});

	// mobile navigation

	$('.hamburger-menu').click(function() { 
		$('.main-nav').toggleClass('mobile-nav--open');
	});

	$('.main-nav__link').click(function() { 
		$('.main-nav').removeClass('mobile-nav--open');
	});
 });
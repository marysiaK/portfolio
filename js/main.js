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
// 		$( ".cross" ).hide();
// 		$( ".main-nav__links" ).hide();
// 		$('.hamburger-menu').click (function() { 
// 		$('.main-nav__links').slideToggle( "slow", function() {
// 		$( ".hamburger-menu" ).hide();
// 		$( ".cross" ).show();
// 		});
// 		});

// 		$( ".cross" ).click(function() {
// 		$( ".main-nav__links" ).slideToggle( "slow", function() {
// 		$( ".cross" ).hide();
// 		$( ".hamburger-menu" ).show();
// 		});
// 		});	
		
 });

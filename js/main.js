$( document ).ready(function() {
    
    // main navigation visibility on scroll
    $(window).scroll(function() {
        if ($(document).scrollTop() > 300) {
            console.log("make main-nav visible here");
            $('.main-nav').addClass('main-nav--is-scrolled-down');

        } else {
            $('.main-nav').removeClass('main-nav--is-scrolled-down');
        }
    });

    // mobile navigation

    $('.hamburger-menu').click(function() { 
        $('.main-nav').toggleClass('mobile-nav--open');
    });

    $('.main-nav__link').click(function() { 
        $('.main-nav').removeClass('mobile-nav--open');
    });

    // scroll reveal
    window.sr = ScrollReveal();
    sr.reveal('.page-section', { duration: 1000, distance: '50px' });

    // smooth scroll

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
 });

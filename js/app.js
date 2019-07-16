// IIFE with jQuery Wrapper
(function($) {
  'use strict';

  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
	$(document).ready(function() {

		/*======================
			For One page scroll
		======================*/
    	$('a[href*="#"]:not([href="#"])').click(function() {
    	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    	    var target = $(this.hash);
    	    var headerH='0';
    	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    	    if (target.length) {
    	      $('html, body').animate({
    	        scrollTop: target.offset().top-headerH+"px"
    	      }, 1000);
    	      return false;
    	    }
    	  }
    	});
	});// DOM Ready

}(jQuery)); // IIFE


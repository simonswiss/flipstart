(function($) {
	'use strict';


	/* =================================== */
	/* ===== WHEN DOCUMENT IS READY ===== */
	/* ================================= */
	$(document).ready(function() {

		// your scripts here
	});


	/* =================================== */
	/* ===== WHEN IMAGES ARE LOADED ===== */
	/* ================================= */
	$(window).load(function() {

		// matching height elements
		if ( $('.matchHeight').length ) {
			
			$('.matchHeight').matchHeight();
		}
	});

})(jQuery);
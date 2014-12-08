"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}		
	}
	
	$('li').click( function (e) {
		e.preventDefault;
		$.scrollTo($(e.currentTarget).data().target, 400)
	})
	
})();
"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}		
	}
	
	$('li').click( function (e) {
		e.preventDefault;
		$.scrollTo($(e.currentTarget).data().target, 400)
	})

	
	Advent.assignEventListeners = function () {
		Advent.$currentTip.click( Advent.scrollOnClick );
		
		Advent.$window.scroll( Advent.setCurrentTipOpacity )
		Advent.$window.scroll( Advent.setSidebarMenu )
		Advent.$window.scroll( Advent.maybeFixSidebar )
	}
	
})();
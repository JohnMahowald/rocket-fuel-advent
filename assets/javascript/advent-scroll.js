"use strict";

(function () {
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;
	
	Advent.setTodaysTip = function () {
		Advent.$currentTip.data("target", "#day-1")
	}
	
	Advent.scrollOnClick = function (e) {
		e.preventDefault
		$.scrollTo($(e.currentTarget).data().target, 400)
	}
	
	Advent.setMenu = function () {
		Advent.dateCards.forEach( function (card, idx) {			
			if (card.today) {
				card.$sidebarLink.removeClass().addClass("today");
				return true
			} else if (card.active) {
				card.$sidebarLink.removeClass().addClass("active");
				return true
			}
			return false
		});
	}
	
	Advent.setCurrentTipOpacity = function () {	
		var tipTop = Advent.$currentTip.offset().top;
		var treeTop = Advent.$mainTree.offset().top;
		var adjustedDiff = 28 - (treeTop - tipTop);
		
		if (adjustedDiff <= 0) {
			Advent.$currentTip.css("opacity", -1 * (adjustedDiff / 10))
		} else (
			Advent.$currentTip.css("opacity", 0)
		)
	}

	Advent.maybeFixSidebar = function () {
		var topSpan = 320 - Advent.$window.scrollTop();
		
		if ((topSpan * 2) + Advent.$sidebar.height() < Advent.$window.height()) {
			Advent.$sidebar.addClass("fixed")
			Advent.$sidebar.css("top", Advent.$sidebarTop)
		} else {
			Advent.$sidebar.removeClass("fixed")
			Advent.$sidebar.css("top", "320px")
		}
	}
})();
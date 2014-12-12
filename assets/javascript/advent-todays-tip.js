"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;
	
	Advent.maybeHideTodaysTip = function () {
		if (Advent.today.getDate() >= 25) {
			var windowWidth = Advent.$window.width();
			var offset = 0;
			if (windowWidth < 420) { 
				offset = 190 
			} else if (windowWidth < 720){
				offset = 200
			} else {
				offset = 290
			};
			
			Advent.$mainTree.css("top", offset);
			Advent.$currentTip.css("display", "none");
			return true;
		}
		return false;
	}
	
	Advent.setTodaysTip = function () {
		Advent.$currentTip.data("target", "#day-" + Advent.adjustedDate())
	}
	
	Advent.goToTooltipLink = function (e) {
		var $link = $(e.currentTarget).find(".learn-more");
		window.open($link.attr("href"), '_blank')
	}
})();
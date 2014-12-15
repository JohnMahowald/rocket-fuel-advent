"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;
	
	Advent.getTipOffset = function () {
		if (Advent.$window.width() < 420) { 
			return 190 
		} else if (Advent.$window.width() < 720){
			return 200
		} else {
			return 290
		}
	}
	
	Advent.maybeHideTodaysTip = function () {
		if (Advent.today.getDate() < 25) { return false }
		Advent.$mainTree.css("top", Advent.getTipOffset());
		Advent.$currentTip.css("display", "none");
	}
	
	Advent.setTodaysTip = function () {
		Advent.$currentTip.data("target", "#day-" + Advent.adjustedDate())
	}
	
	Advent.goToTooltipLink = function (e) {
		e.preventDefault();
		var $link = $(e.currentTarget).find(".learn-more");
		window.open($link.attr("href"), '_blank')
	}
})();
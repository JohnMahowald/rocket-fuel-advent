"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;
	
	Advent.maybeHideTodaysTip = function () {
		if (Advent.today.getDate() === Advent.finalDay) {
			Advent.$currentTip.css("display", "none")
			Advent.$mainTree.css("top", "290px")
			return true;
		}
		return false;
	}
	
	Advent.setTodaysTip = function () {
		var today = Advent.today.getDate();
		var adventDay = 10 - (Advent.finalDay - today);
		Advent.$currentTip.data("target", "#day-" + adventDay)
	}
})();
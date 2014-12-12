"use strict";

(function () {
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;

	Advent.scrollToElement = function (e) {
		e.preventDefault
		var target = $(e.currentTarget).data().target;
		var targetHeight = $(target).offset().top - ($(window).height() / 3);
		$.scrollTo(targetHeight, 400)
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
	
	Advent.removeInitialize = function () {
		$('.day').removeClass("initialize")
	}
	
	Advent.setInitialize = function () {
		if ($(window).width() > 720) {
			$("#day-" + Advent.adjustedDate()).addClass("initialize")	
		}
	}
		
	Advent.scrollOnLoad = function () {
		$.scrollTo($('#day-' + Advent.adjustedDate()).offset().top - 50, 600)
	}
})();
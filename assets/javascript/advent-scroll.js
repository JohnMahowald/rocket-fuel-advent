"use strict";

(function () {
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;

	Advent.scrollToElement = function (e) {
		e.preventDefault();
		var target = $(e.currentTarget).data().target;
		var targetHeight = $(target).offset().top - ($(window).height() / 3);
		$.scrollTo(targetHeight, 400)
	}
	
	Advent.currentTipOffset = function () {
		var tipTop = Advent.$currentTip.offset().top;
		var treeTop = Advent.$mainTree.offset().top;
		return 28 - (treeTop - tipTop);
	}
		
	Advent.setCurrentTipOpacity = function () {
		var adjustedDiff = Advent.currentTipOffset();
		
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
		$("#day-" + Advent.adjustedDate()).addClass("initialize")
	}
		
	Advent.scrollOnLoad = function () {
		$.scrollTo($('#day-' + Advent.adjustedDate()).offset().top - 50, 600)
	}
})();
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
		if ($(document).scrollTop() > 200) {
			Advent.$sidebar.addClass("fixed")
		} else {
			Advent.$sidebar.removeClass("fixed")
		}
	}
	
	Advent.findCenterCard = function () {
		var windowCenter = $(document).scrollTop() + ($(window).height() / 2);
		for (var i = Advent.dateCards.length - 1; i >= 0; i --) {
			var dateCard = Advent.dateCards[i];
			if (dateCard.active && (dateCard.$el.offset().top < windowCenter)) {
				return dateCard
			}
		}
		return false
	}
	
	Advent.setActiveSidebarItem = function () {
		var currentCard = Advent.findCenterCard();
		for (var i = 0; i < Advent.dateCards.length; i ++ ) {
			if (currentCard === Advent.dateCards[i]) {
				Advent.dateCards[i].$sidebarLink.addClass("current")
			} else {				
				Advent.dateCards[i].$sidebarLink.removeClass("current")
			}
		}
	}
})();
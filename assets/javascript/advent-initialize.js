"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}		
	}
	
	var Advent = window.Advent;
	
	// Variables
	Advent.$currentTip = $(".current-tip>a");
	Advent.$window = $(window)
	Advent.$mainTree = $("#main-tree");
	Advent.$sidebar = $('.sidebar');
	Advent.$sidebarTop = (Advent.$window.height() - Advent.$sidebar.height()) / 2;
	Advent.$days = $('.day');
	Advent.$december = $('.december');
	Advent.today = new Date();
	Advent.dateCards = []
	
	// Initialize parallax
	$.stellar();
	
	// Arches the text "December" in the tree	
	setTimeout( function () {
		$('.december').arctext({radius: 33})
	}, 0);
	
	// Instantiate Date Cards
	Advent.$days.each( function (idx, el) {
		Advent.dateCards.push(Advent.createCardFromEl(el))
	});
	
	// Allows hover state for active cards
	Advent.setActiveDateCards()
	
	// Changes card view based on date
	Advent.dateCards.forEach ( function (card) {
		card.setActiveCard();
	})
	
	// Sets the menu based on past, present, or future
	Advent.setMenu();
	
	// Set Today's Tip
	Advent.setTodaysTip();
	
	// Register Event Listeners
	Advent.assignEventListeners();
	
})();
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
	Advent.$days = $('.day');
	Advent.$december = $('.december');
	Advent.today = new Date();
	Advent.dateCards = [];
	Advent.finalDay = 23;
	Advent.dissableScroll = false;
	
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
	Advent.dateCards.forEach ( function (card) { card.setActiveCard()	});
	
	// Sets the menu based on past, present, or future
	Advent.setMenu();
	
	// Set Today's Tip
	Advent.setTodaysTip();
	
	// Hide Today's tip on last day
	Advent.maybeHideTodaysTip();
	
	// Register Event Listeners
	Advent.$window.scroll( Advent.maybeScroll );
	Advent.$currentTip.click( Advent.scrollToElement );
	Advent.$sidebar.find("li").click( Advent.scrollToElement )
	Advent.$window.scroll( Advent.maybeFixSidebar );
	Advent.$window.scroll( Advent.setCurrentTipOpacity )
	Advent.$window.scroll( Advent.setActiveSidebarItem )
  $(window).resize( function() { location.reload() })	
})();
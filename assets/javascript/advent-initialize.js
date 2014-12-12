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
	Advent.$lastSidebarItem = $(".sidebar>li:last-of-type");
	Advent.$footer = $('.fixed-footer');
	Advent.$days = $('.day');
	Advent.$december = $('.december');
	Advent.dateCards = [];
	Advent.dissableScroll = false;
	
	// Date Variables
	Advent.timeOffset = 3 * 60 * 60 * 1000;
	Advent.today = new Date();	
	Advent.localOffset = Advent.today.getTimezoneOffset() * 60 * 1000
	
	$(document).bind("mobileinit", function() {
	  $.mobile.ajaxEnabled = false;
	});
	
	// Initialize parallax unless mobile
	if ($(window).width() >= 720) { $.stellar() };
	
	// Instantiate Date Cards
	Advent.$days.each( function (idx, el) {
		Advent.dateCards.push(Advent.createCardFromEl(el));
	});
	
	// Allows hover state for active cards
	Advent.setActiveDateCards();	
	
	// Changes card view based on date
	Advent.dateCards.forEach ( function (card) { card.setActiveCard()	});
	Advent.setTodaysTip();
	Advent.maybeHideTodaysTip();
	Advent.setInitialize();
	
	setTimeout( function () {
		Advent.$currentTip.click( Advent.scrollToElement );
		Advent.$window.scroll( Advent.setCurrentTipOpacity );
		Advent.setMobileClickHandlers();
		Advent.scrollOnLoad();
		$(".day.active").mouseenter( Advent.removeInitialize );
		$('.flag').click( Advent.goToTooltipLink );
		$('.december').arctext({radius: 33})		
	}, 0)
	
})();
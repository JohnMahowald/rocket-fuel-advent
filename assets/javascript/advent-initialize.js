"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}		
	}
	
	var Advent = window.Advent;	
	
	// Variables
	Advent.startHour = 5; // Hour in the Day
	Advent.timeOffset = 5 * 60 * 60 * 1000; // UTC offset (5 for EST)	
	Advent.today = new Date();
	Advent.dateCards = [];
	Advent.dissableScroll = false;	
	
	// jQuery Variables
	Advent.$window = $(window)	
	Advent.$currentTip = $(".current-tip>a");
	Advent.$mainTree = $("#main-tree");
	Advent.$footer = $('.fixed-footer');
	Advent.$days = $('.day');
	
	// Initialize parallax unless mobile
	if ($(window).width() >= 720) { $.stellar() };
	
	// Instantiate Date Cards
	Advent.$days.each( function (idx, el) {
		Advent.dateCards.push(Advent.createCardFromEl(el));
	});
	
	// Changes card view based on date
	Advent.setActiveDateCards();	
	Advent.setTodaysTip();
	Advent.maybeHideTodaysTip();
	Advent.setInitialize();
	
	// DOM Manipulation
	setTimeout( function () {
		Advent.$currentTip.click( Advent.scrollToElement );
		Advent.$window.scroll( Advent.setCurrentTipOpacity );
		Advent.setMobileClickHandlers();
		Advent.scrollOnLoad();
		$(".day.active").mouseenter( Advent.removeInitialize );
		$('.flag').click( Advent.goToTooltipLink );	
	}, 0)
})();
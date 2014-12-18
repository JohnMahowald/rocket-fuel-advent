"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}		
	}
	
	var Advent = window.Advent;
	
	Advent.maybePreventScroll = function (e) {
		if (Advent.dissableScroll && ($(window).width() < 720)) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	
	Advent.closeMobileView = function (e) {
		Advent.dissableScroll = false;
		$(e.currentTarget).removeClass('active')
	}
	
	$('body').on({ 'mousewheel': Advent.maybePreventScroll });
	$('.mobile-view').click( Advent.closeMobileView )	
	$('.mobile-close').on('touchstart', function (e) {
		$(e.currentTarget).addClass("active")
	})
	
	Advent.setMobileClickHandlers = function () {
		$('.day.active').click( function (e) {
			
			if ($(window).width() > 720) { return }
			
			var target = $(e.currentTarget).data().mobileTarget;
			
			$(target)
				.css("top", $(document).scrollTop())
				.css("height", $(window).height())
				.css("width", $(window).width())			
				.addClass("active")
			
			Advent.dissableScroll = true;
		})
	}
})();
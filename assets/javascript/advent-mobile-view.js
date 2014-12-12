"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}		
	}
	
	var Advent = window.Advent;
	
	$('body').on({
		'mousewheel scrollstart': function (e) {
			if (Advent.dissableScroll && ($(window).width() < 500)) {
				e.preventDefault();
				e.stopPropagation();	
			}
		}
	});
	
	
	$('.mobile-close').on('touchstart', function (e) {
		$(e.currentTarget).addClass("active")
	})
	
	Advent.setMobileClickHandlers = function () {
		$('.day.active').click( function (e) {
			
			if ($(window).width() > 700) { return }
			
			var target = $(e.currentTarget).data().mobileTarget;
			$(target)
				.css("top", $(document).scrollTop())
				.addClass("active")
				.css("height", $(window).height())
				.css("width", $(window).width())
			
			if ($(window).width() < 500) {
				Advent.dissableScroll = true;
			}
		})
	}
	
  $('.mobile-view').click( function (e) {
    e.preventDefault
		Advent.dissableScroll = false;
    $(e.currentTarget).removeClass('active')
  })
})();
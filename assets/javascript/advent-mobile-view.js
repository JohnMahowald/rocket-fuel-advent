"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}		
	}
	
	var Advent = window.Advent;
	
	$('body').on({
		'mousewheel': function (e) {
			if (Advent.dissableScroll && ($(window).width() < 500)) {
				e.preventDefault();
				e.stopPropagation();	
			}
		}
	});
	
	$('.day').click( function (e) {
		var x = $(e.currentTarget).data().mobileTarget;
		$(x).css("top", $(document).scrollTop()).addClass("active")
		if ($(window).width() < 500) {
			Advent.dissableScroll = true;
		}
	})
	
  $('.mobile-view').click( function (e) {
    e.preventDefault
		Advent.dissableScroll = false;
    $(e.currentTarget).removeClass('active')
  })
})();
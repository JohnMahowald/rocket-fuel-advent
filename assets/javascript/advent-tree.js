(function() {
	
	if (typeof Advent === "undefined") {
		window.Advent = {}		
	}
	
	var Advent = window.Advent;
	
	// Common DOM Elements
	Advent.$currentTip = $(".current-tip")
	Advent.$mainTree = $("#main-tree")	
	
	// Initializes the parallax
	$.stellar();
	
	// Arches the text "December" in the tree	
	$('.december').arctext({ radius: 32	});
	
	// Functions
	Advent.renderFlag = function (e) {
		e.preventDefault
		
		$(e.currentTarget)
			.find(".present")
			.hide()
			.addClass("active")
			.fadeIn(400, function() {	
				$(e.currentTarget).find(".past").removeClass("active")				
				$(e.currentTarget).find(".future").removeClass("active")
		})
	};
	
	Advent.hideFlag = function (e) {
		e.preventDefault
		
		e.preventDefault
		$(e.currentTarget)
			.find(".past")
			.hide()
			.addClass("active")
			.fadeOut(400, function() {	
				$(e.currentTarget).find(".present").removeClass("active")
		})
	};
	
	Advent.setCurrentTipOpacity = function (e) {	
		var tipTop = Advent.$currentTip.offset().top;
		var treeTop = Advent.$mainTree.offset().top;
		var adjustedDiff = 28 - (treeTop - tipTop);
		
		if (adjustedDiff <= 0) {
			Advent.$currentTip.css("opacity", -1 * (adjustedDiff / 10))
		} else (
			Advent.$currentTip.css("opacity", 0)
		)
	}
	
	// Event Listeners
	$('.day').hover( Advent.renderFlag, Advent.hideFlag)
	$(window).scroll( Advent.setCurrentTipOpacity )
	$(window).scroll( Advent.setSidebarMenu )
	
	// To be Removed
	console.log("Design by: Iron Creative")
	console.log("Built by: John Mahowald (www.johnmahowald.com)")
})();
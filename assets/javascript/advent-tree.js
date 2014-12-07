(function() {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}		
	}
	
	var Advent = window.Advent;
	
	// Common DOM Elements
	Advent.$currentTip = $(".current-tip")
	Advent.$mainTree = $("#main-tree")
	
	// Initialize parallax
	$.stellar({ responsive: true });
	
	// Create Date Cards
	Advent.dateCards = []
	
	$('.day').each( function (idx, el) {
		Advent.dateCards.push( new Advent.DateCard({
			$el: $(el)
		}));
	})
	
	Advent.dateCards.forEach ( function (card) {
		card.setActiveCard();
	})
	
	// Arches the text "December" in the tree	
	$('.december').arctext({ radius: 32	});
	
	// Functions
	Advent.renderFlag = function (e) {
		e.preventDefault
		
		$(e.currentTarget)
			.find(".present")
			.hide()
			.addClass("active")
			.fadeIn(300, function() {	
				$(e.currentTarget).find(".past").removeClass("active")
				$(e.currentTarget).find(".future").removeClass("active")
		})
	};
	
	Advent.hideFlag = function (e) {
		e.preventDefault
		
		$(e.currentTarget)
			.find(".past")
			.addClass("active")
		$(e.currentTarget)
			.find(".present")
			.removeClass("active")
	};
	
	Advent.maybeRenderFlag = function (e) {
		e.preventDefault
		
		if (Advent.getDateCard(e).active) {
			Advent.renderFlag(e)
			return true
		} else {
			return false
		}
	}
	
	Advent.maybeHideFlag = function (e) {
		e.preventDefault
		
		if (Advent.getDateCard(e).active) {
			Advent.hideFlag(e)
			return true;
		} else {
			return false
		}
	}
	
	Advent.getDateCard = function (e) {
		var day = $(e.currentTarget).data().day;
		return Advent.dateCards[parseInt(day) - 1];
	}
	
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
	$('.day').hover( Advent.maybeRenderFlag, Advent.maybeHideFlag)
	$(window).scroll( Advent.setCurrentTipOpacity )
	$(window).scroll( Advent.setSidebarMenu )
})();
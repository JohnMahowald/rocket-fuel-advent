(function() {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;
	
	Advent.today = new Date();
	
	Advent.dateIsActive = function (utcTime) {
		var activeDate = parseInt(utcTime) + (Advent.today.getTimezoneOffset() * 60000);
		return activeDate < Advent.today.getTime();
	}
	
	Advent.getSidebarItem = function (dayStr) {
	}
	
	Advent.DateCard = function (options) {
		this.$el = options.$el,
		this.active = Advent.dateIsActive(options.$el.data().utcActive)
		this.$sidebarItem = Advent.getSidebarItem(options.$el.data().day)
	}
	
	Advent.DateCard.prototype.setActiveCard = function () {
		if (this.active) {
			this.$el.find(".past").addClass('active')			
		} else {
			this.$el.find(".future").addClass('active')
		}
	}
})();
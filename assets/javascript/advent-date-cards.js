"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;

	Advent.dayToDate = { 1: 10, 2: 11, 3: 12, 4: 15, 5: 16, 6: 17, 7: 18, 8: 19, 9: 22, 10: 23, 11: 24, 12: 25	}	
	Advent.dateToDay = { 10: 1, 11: 2, 12: 3, 13: 3, 14: 3, 15: 4, 16: 5, 17: 6, 18: 7, 19: 8, 20: 8, 21: 8, 22: 9, 23: 10, 24: 11, 25: 12 }
	
	Advent.setActiveDateCards = function () {
		for (var i = 0; i < Advent.dateCards.length; i ++ ) {
			var card = Advent.dateCards[i];
			if (card.active) {
				card.$el.addClass("active")
				card.$el.find(".present").addClass("active")
			}			
		}
	}
	
	Advent.numberOfLiveDays = function () {
		var result = 0;
		for (var i = 0; i < Advent.dateCards.length; i ++) {
			if (Advent.dateCards[i].active) { result ++ }
		}
		return result
	}
	
	Advent.getDateCard = function (e) {
		var day = $(e.currentTarget).data().day;
		return Advent.dateCards[parseInt(day) - 1];
	}
	
	Advent.adjustedDate = function () {
		var today = Advent.today.getDate();
		if (today > 25) { today = 25 };
		return Advent.dateToDay[today];
	}
	
	Advent.isLive = function (day) {
		var date = Advent.dayToDate[day];
		var liveTime = Date.UTC(2014, 11, date, Advent.startHour) + Advent.timeOffset;
		return Advent.today.getTime() > liveTime;
	}
	
	Advent.createCardFromEl = function (el) {
		var $el = $(el);
		var day = $el.data().day;
		
		return new Advent.DateCard({
			$el: $el,
			$sidebarLink: $("li[data-target=#day-" + day + "]"),
			active: Advent.isLive(day),
			day: day
		});
	}
	
	Advent.DateCard = function (options) {
		this.$el = options.$el,
		this.active = options.active,
		this.$sidebarLink = options.$sidebarLink,
		this.day = options.day
	}
})();
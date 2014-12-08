"use strict";

(function () {
	
	if (typeof window.Advent === "undefined") {
		window.Advent = {}
	}
	
	var Advent = window.Advent;
	
	Advent.setActiveDateCards = function () {
		Advent.dateCards.forEach( function (card) {
			if (card.active) { 
				card.$el.addClass("active")
				card.$el.find(".present").addClass("active")
			}
		})
	}
	
	Advent.activeDate = function(utcTime) {
		return parseInt(utcTime) + (Advent.today.getTimezoneOffset() * 60000);
	}
	
	Advent.dateIsActive = function (utcTime) {
		return Advent.activeDate(utcTime) < Advent.today.getTime();
	}
	
	Advent.isToday = function (utcTime) {
		var testDate = new Date(Advent.activeDate(utcTime));
		return Advent.today.getDate() === testDate.getDate();
	}
	
	Advent.getDateCard = function (e) {
		var day = $(e.currentTarget).data().day;
		return Advent.dateCards[parseInt(day) - 1];
	}
	
	Advent.createCardFromEl = function (el) {
		var $el = $(el);
		var utcTime = $el.data().utcActive;
		
		return new Advent.DateCard({
			$el: $el,
			$sidebarLink: $("li[data-target=#day-" + $el.data().day + "]"),
			active: Advent.dateIsActive(utcTime),
			today: Advent.isToday(utcTime)
		});
	}
	
	Advent.DateCard = function (options) {
		this.$el = options.$el,
		this.active = options.active,
		this.$sidebarLink = options.$sidebarLink,
		this.today = options.today
	}
	
	Advent.DateCard.prototype.setActiveCard = function () {
		if (this.active) {
			this.$el.find(".past").addClass('active')			
		} else {
			this.$el.find(".future").addClass('active')
		}
	}
})();
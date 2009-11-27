/*
 * Tip - jQuery plugin
 * jQuery plugin to display nice tips on forms
 * Author: Georges Duverger
 */

// Methods attached to the jQuery.fn object

// Display the tip with the content of the data-tip attribute
// ex.: $("input#example").tip()

jQuery.fn.tip = function() {
	return this.each(function(){

		// Set the "Hide tips" link
		var less = $("<a href='#' class='tip-hide'>Hide tips</a>").mousedown(function(event) {
			event.preventDefault();
			$("body").addClass("tip-hidden");
		});

		// Set the "Show tips" link
		var more = $("<a href='#' class='tip-show'>Show tips</a>").mousedown(function(event) {
			event.preventDefault();
			$("body").removeClass("tip-hidden");
		});

		// Set the tip bubble
		var content = $("<div class='tip-content'>"+$(this).attr("data-tip")+"</div>");
		var tip = $("<div class='tip' data-for='"+$(this).attr("id")+"'></div>").append(content).append(less).append(more);
		// Insert the tip right after the input
		// TODO append to body?
		$(tip).insertAfter(this).hide().append("<span class='tip-pointer'></span>");

		// Define the tip behaviours
		$(this).focus(function() {
			// Get the offset position of the input
			var offset = $(this).offset();
			// Show the tip at the right (offset) position on focus
			$(".tip[data-for='"+$(this).attr("id")+"']").show().css({top: offset.top+$(this).outerHeight(), left: offset.left});
		}).blur(function() {
			// Hide the tip on blur
			$(".tip[data-for='"+$(this).attr("id")+"']").hide();
		});
	});
};
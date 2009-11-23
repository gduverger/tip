/*
 * Tip - jQuery plugin
 * Author: Georges Duverger
 */

// Methods attached to the jQuery.fn object

jQuery.fn.tip = function() {
	return this.each(function(){
		// Set the Hide tips links
		var less = $("<a href='#' class='tip-hide'>Hide tips</a>").mousedown(function(event) {
			event.preventDefault();
			$("body").addClass("tip-hidden");
		});
		// Set the Show tips links
		var more = $("<a href='#' class='tip-show'>Show tips</a>").mousedown(function(event) {
			event.preventDefault();
			$("body").removeClass("tip-hidden");
		});
		// Set the tip bubble
		var content = $("<div class='tip-content'>"+$(this).attr("data-tip")+"</div>");
		var tip = $("<div class='tip' data-for='"+$(this).attr("id")+"'></div>").append(content).append(less).append(more);
		$(tip).insertAfter(this).hide().append("<span class='tip-pointer'></span>"); // TODO? appendTo("body")
		// Set the focus/blur behaviour
		$(this).focus(function() {
			var offset = $(this).offset();
			$(".tip[data-for='"+$(this).attr("id")+"']").show().css({top: offset.top+$(this).outerHeight(), left: offset.left});
		}).blur(function() {
			$(".tip[data-for='"+$(this).attr("id")+"']").hide();
		});
	});
};
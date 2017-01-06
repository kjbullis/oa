$(document).ready(function () {
	var container = $("#dots-container"),
			details = $("#product-details-container"),
			link = function () {
				return $(this).attr("href");
			};
	dot();
	function dot() {
		container.find("a").click(function (event) {
			event.stopPropagation();

			$(this).find(".shadow").addClass("current-dot");
			var page = link.call(this);
			$(details).empty().load(page, function () {
				if (details.hasClass("hidden")) {
					container.find(".current-dot").addClass("current-dot");
					details.removeClass("hidden");
				} else {
					container.find(".current-dot").removeClass("current-dot");
					details.addClass("hidden");
				}
				console.log("Triggered the click function.");
			});
			return false;
		});
	}
});
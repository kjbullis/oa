$(document).ready(function () {
	var container = $("#dots-container"),
			details = $("#product-details-container"),
			modal = $("#modal"),
			link = function () {
				return $(this).attr("href");
			};
	dot();
	function dot() {
		container.find("a").click(function (event) {
			event.stopPropagation();
			if (modal.hasClass('hidden')) {
				modal.removeClass("hidden");
			}
			$(this).find(".shadow").addClass("current-dot");
			var page = link.call(this);
			$(details).empty().load(page, function () {
				if (details.hasClass("hidden")) {
					container.find(this).addClass("current-dot");
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

	$("#modal").on("click", function () {
		modal.addClass("hidden");
		details.empty().addClass("hidden");
		$(".current-dot").removeClass("current-dot");
		});

});
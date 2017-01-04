$(document).ready(function () {

	function dot() {
		var container = $("#dots-container"),
				content = $("#dots-content"),
//				loading = $("#loading"),
				link = function () {
					return $(this).attr("href");
				};

		container.find("a").click(function () {
			container.find(".current-dot").removeClass("current-dot");
			$(this).find(".shadow").addClass("current-dot");
			var page = link.call(this);
//			var loader = setTimeout(function () {
//				$(loading).show();
//			}, 100);
			$(content).empty().load(page, function () {
//				clearTimeout(loader);
//				$(loading).hide();
				content.removeClass("hidden");
				console.log("Triggered the click function.");
			});
			return false;
		});
	}
	;

	dot();

});
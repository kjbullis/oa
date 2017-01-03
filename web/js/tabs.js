
var Tabs = (function (options) {
	var forceLoad = false;

	var settings = {
		container: "#tabs-container",
		content: "#tabs-content",
		loading: "#loading",
		link: function () {
			return $(this).attr("href");
		}
	};

	$.extend(settings, options);

	var container = $(settings.container);

	container.find("a").click(function () {
		if (projectNotSaved) {
			alert("It looks like you've been editing. \n Click save to keep your changes.");
			console.log("Got into projectNotSaved option. projectNotSaved= " + projectNotSaved);
			return false;
		} else {
			if (($(this).hasClass("current-tab") || $(this).hasClass("disabled-tab")) && !forceLoad) {
				return false;
			}



			forceLoad = false;
//		Instead handling this by checking if the tab has the "disabled-tab" class a few lines up - EK
//
//		if (!isProjectView()) {
//			var text = $(this).text();
//			if (text == "Projects") {
//				return false;
//			}
//		}
//		else {
//			var text = $(this).text();
//			if (text == "Donors" || text == "Reports") {
//				return false;
//			}
//		}
			container.find(".current-tab").removeClass("current-tab");
			$(this).addClass("current-tab");
			var page = settings.link.call(this);
			var loader = setTimeout(function () {
				$(settings.loading).show();
			}, 100);
			$(settings.content).empty().load(page, {}, function () {
				clearTimeout(loader);
				$(settings.loading).hide();
			});
			return false;
		}
	});









	setNonProjectView();
	container.find("a:first-child").click();

	function showTab(idx, force) {
		if (force) {
			forceLoad = true;
		} else {
			forceLoad = false;
		}
		container.find("a:nth-child(" + idx + ")").click();
	}

	return {
		showTab: showTab
	};
});
$(document).ready(function () {
	var container = $("#dots-container"),
			details = $("#product-details-container"),
			modal = $("#modal"),
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			link = function () {
				return $(this).attr("href");
			};
	enableLoadDetails();
	enableHideDetails();
	function enableLoadDetails() {
		container.find("a").click(function (event) {
			event.stopPropagation();
			var page = link.call(this);
//	When you click on a link inside the dots-container
//  Shrink any dot that's big already
			$('.big-dot').removeClass('big-dot');
//	Remove anything that's in the details container
//  Load the page associated with that link into the details container
			$(this).find('.dot').addClass('big-dot');
			if ($('.big-dot').hasClass('top-dot')) {
				$('.top-dot').css({
					top: '6vh'
				});
			}
			details.empty().load(page).show('fast');
// Increase the size of the dot and position it just outside the details container
			return false;
		});
	}

	function enableHideDetails() {
// You click anywhere that's not a link in the dots container, and that is outside the details container, 
		$(document).click(function (event) {
			if (!$(event.target).closest(details).length || $(event.target).closest(container).length) {
				// hide the details container and remove the big dot class.
				details.hide('fast');
				$('.big-dot').removeClass('big-dot');
			}
		});
	}



});
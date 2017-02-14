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
//	When you click on a link inside the dots-container
		container.find("a").click(function (event) {
			event.stopPropagation();
			var page = link.call(this);
//if the details section associated with this link is open, close it
//otherwise, close the one that's open and open this one.

//			$('.current-dot').next('.details').slideToggle();
			$('.current-dot').removeClass('current-dot');
//	Remove anything that's in the details container
//  Load the page associated with that link into the details container
			$(this).addClass('current-dot').next('.details').load(page, function(){
				$(this).slideToggle();
				$('html,body').animate({scrollTop: $('.current-dot').offset().top});
			});
			if ($('.big-dot').hasClass('top-dot')) {
				$('.top-dot').css({
					top: '6vh'
				});
			}
//			details.empty().load(page).show('fast');
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
//create a way to check if an element exists
$.fn.exists = function () {
	return this.length !== 0;
};

$(document).ready(function () {
	var originalSpotX,
			originalSpotY,
			details = $("#product-details-container"),
			modal = $("#modal");

//arrange dots evenly around a circle
	distributeDots();


//keep everything where it should be after resizing the window
	$(window).on('resize', function () {
		$('.big-dot').removeClass('big-dot');
		if ($(window).width > 800) {
			$('.swipe-here').addClass('hidden');
		}
		distributeDots();
	});

$("#modal").on("click", function () {
		modal.addClass("hidden");
		details.empty().addClass("hidden");
		$(".current-dot").removeClass("current-dot");
		putDotBack();
		});	
		
//preview product image on small screens
	$(".swipe-here").on("swipeleft", function() {
		putDotBack();
		nextDotCounterClockwise();
		moveDotToCorner();
	});
	$(".swipe-here").on("swiperight", function() {
		putDotBack();
		nextDotClockwise();
		centerDot();
	});


	function moveDotToCorner() {
		var width = $('.current-dot').width(),
				x = 50 + width,
				y = 50 + width;
		$('.current-dot .dot').addClass('big-dot').delay(125).animate({
			left: x + 'px',
			top: y + 'px'
		}, 250);
	
	}
	
	function moveProductImageToCorner() {
		var width = $('.current-dot').width(),
				x = 50 + width,
				y = 50 + width;
		$('.product-image').delay(700).css({
			left: x + 'px',
			top: y + 'px'
		});
	
	}

	function centerDot() {
		var gear = $("#gear-container"),
				start = gear.offset(),
				gWidth = gear.width(),
				dWidth = gWidth * 0.4545454545,
				x = start.left + gWidth / 2 - dWidth,
				y = start.top + gWidth / 2 - dWidth;
		$('.current-dot .dot').addClass('big-dot').delay(125).animate({
			left: x + 'px',
			top: y + 'px'
		}, 250);
	}

	function putDotBack() {
		$('.current-dot .dot').removeClass('big-dot').delay(125).animate({
			left: originalSpotX + 'px',
			top: originalSpotY + 'px'
		}, 250);
	}

	function distributeDots() {
		var gear = $("#gear-container"),
				start = gear.offset(),
				width = gear.width(),
				dot = $('.dot'), //here "dot" is an array containing each element with the class dot
				numberOfDots = dot.length, //the number of dots is equal to the length of the dots array
				radius = width / 1.55,
				angle = 0,
				step = (2 * Math.PI) / numberOfDots,
				dotRadius = dot.width() / 2,
				startX = start.left + width / 2,
				startY = start.top + width / 2;
		dot.each(function () {
			//equation of a circle
			//x = originX + radius * cos(angle in radians, or angle plus step in this case)
			//y = originY + radius * sin(angle in radians, or angle plus step in this case)
			var x = (startX + radius * Math.cos(angle)) - dotRadius,
					y = (startY + radius * Math.sin(angle)) - dotRadius;
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
				if (angle > 4.36 && angle < 5.24) {
					$(this).addClass('top-dot');
				}
			angle += step;
		});
	}

//there's got to be a way to simplify this so I don't need highlight.
	function nextDotCounterClockwise() {
		//check if there is a next anchor
		if ($('.current-dot').closest('a').next("a").exists()) {
			$('.current-dot').removeClass('current-dot').closest('a').next().addClass('current-dot').focus();
			var here = $('.current-dot .dot').offset();
			console.log("Location of current dot is x: " + here.left + " y: " + here.top);
			originalSpotX = here.left;
			originalSpotY = here.top;
		} else {
			// if there is no next anchor, select the first anchor
			$('.current-dot').removeClass('current-dot');
			$('#dots-container a:first').addClass('current-dot').focus();
			var here = $('.current-dot .dot').offset();
			console.log("Location of current dot is x: " + here.left + " y: " + here.top);
			originalSpotX = here.left;
			originalSpotY = here.top;
			};
	}

	function nextDotClockwise() {
		putDotBack();
		//check if there is a previous anchor
		if ($('.current-dot').closest('a').prev("a").exists()) {
			//find the dot with the class "highlight", remove that class, find the next dot, add the class
			$('.current-dot').removeClass('current-dot').closest('a').prev().addClass('current-dot').focus();
			var here = $('.current-dot .dot').offset();
			console.log("Location of current dot is x: " + here.left + " y: " + here.top);
			originalSpotX = here.left;
			originalSpotY = here.top;
		} else {
			// if there is no previous anchor, select the last anchor
			$('.current-dot').removeClass('current-dot');
			$('#dots-container a:last').addClass('current-dot').focus();
			var here = $('.current-dot .dot').offset();
			console.log("Location of current dot is x: " + here.left + " y: " + here.top);
			originalSpotX = here.left;
			originalSpotY = here.top;
		}
	}

	function swipeBetweenDetailPages() {
		//when the popup is opened, add class .swipe-here to divs that cover the whole window (and remove it when the popup is closed)
		//how do I guard against accidentally tapping outside --by making the 	
		//when someone swipes anywhere on the screen
		//bring up the "next" product by triggering a click on the next one, using the swipe algorthims.
	}

});





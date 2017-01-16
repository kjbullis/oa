//run a .each loop for all the tab elements, positioning them each += 15 degress (or whatever it is) more than the last one so they're arranged around a circle.
$(document).ready(function () {
	var originalSpotX,
			originalSpotY;

	distributeDots();

	//create a way to check if an element exists
	$.fn.exists = function () {
		return this.length !== 0;
	};

	function centerDot() {
		var gear = $("#gear-container"),
				start = gear.offset(),
				gWidth = gear.width(),
				dWidth = gWidth * 0.4545454545,
				x = start.left + gWidth / 2 - dWidth,
				y = start.top + gWidth / 2 - dWidth;
		$('.preview .dot').animate({
			left: x + 'px',
			top: y + 'px'
		}, 250);
	}

	function putDotBack() {
		$('.preview .dot').animate({
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
			angle += step;
		});
	}

//PREVIEW PRODUCTS WITH SWIPING ON PORTRAIT MODE
	$(".swipe-here").on("swipeleft", function () {
		putDotBack();
		//check if there is a next anchor
		if ($('.highlight').closest('a').next("a").exists()) {
			//find the dot with the class "highlight", remove that class, find the next dot, add the class
			$('.highlight').removeClass('highlight').closest('a').next().find('.shadow').addClass('highlight');
			$('.preview').removeClass('preview').closest('a').next().addClass('preview').focus();
			var here = $('.preview .dot').offset();
				originalSpotX = here.left;
				originalSpotY = here.top;
			$('.preview .dot', function () {
				centerDot();
			});	
		} else {
			// if there is no next anchor, select the first anchor
//			console.log("got to else statement -- no next a exists");
			$('.highlight').removeClass('highlight');
			$('.preview').removeClass('preview');
			$('#dots-container a:first').addClass('preview').find('.shadow').addClass('highlight').focus();
			var here = $('.preview .dot').offset();
				originalSpotX = here.left;
				originalSpotY = here.top;
			$('.preview .dot', function () {
				centerDot();
			});	
		}
	});

	$(".swipe-here").on("swiperight", function () {
		putDotBack();
		//check if there is a previous anchor
		if ($('.highlight').closest('a').prev("a").exists()) {
			//find the dot with the class "highlight", remove that class, find the next dot, add the class
			$('.highlight').removeClass('highlight').closest('a').prev().find('.shadow').addClass('highlight');
			$('.preview').removeClass('preview').closest('a').prev().addClass('preview').focus();
			var here = $('.preview .dot').offset();
				originalSpotX = here.left;
				originalSpotY = here.top;
			$('.preview .dot', function () {
				centerDot();
			});	
		} else {
			// if there is no previous anchor, select the last anchor
//			console.log("got to else statement -- no next a exists");
			$('.highlight').removeClass('highlight');
			$('.preview').removeClass('preview');
			$('#dots-container a:last').addClass('preview').find('.shadow').addClass('highlight').focus();
			var here = $('.preview .dot').offset();
				originalSpotX = here.left;
				originalSpotY = here.top;
			$('.preview .dot', function () {
				centerDot();
			});	
		}
	});

	$(window).on('resize', function () {
		distributeDots();
		if ($(window).width >= $(window).height) {
			$('.preview').removeClass('preview');
		}
	});



});





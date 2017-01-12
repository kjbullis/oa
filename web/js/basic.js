//run a .each loop for all the tab elements, positioning them each += 15 degress (or whatever it is) more than the last one so they're arranged around a circle.
$(document).ready(function () {
	function distributeDots() {
		var		gear = $("#gear-container"),
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

	$(window).on('resize', function () {
		distributeDots();
	});

//	$("a").click(function () {
//		$(this).find('img').css(
//				'box-shadow', '0px 0px 0px black'
//				);
//	});
	
	
	distributeDots();


//Build page with form functions 	

//	function createDots() {
//		dot.remove();
//		for (var i = 0; i < +$('input:number').val(); i++) {
//			$('<div/>', {
//				'class': 'dot'
//			}).appendTo(container);
//		}
//	};
//	//	
//	$("form").on("submit", function () {
//		createDots();
//	});

//	createDots();

});





//run a .each loop for all the tab elements, positioning them each += 15 degress (or whatever it is) more than the last one so they're arranged around a circle.
$(document).ready(function () {


//	function createDots() {
//		dot.remove();
//		for (var i = 0; i < +$('input:number').val(); i++) {
//			$('<div/>', {
//				'class': 'dot'
//			}).appendTo(container);
//		}
//	}

	function distributeDots() {
		var container = $('#dots-container'),
				gearWidth = $("#gear").width(),
				start = $("#gear").offset(),
				width = container.width(),
				dot = $('.dot'), //array containing each element with the class dot
				numberOfDots = dot.length, //for now, this depends on the number of dots in the html
				radius = width / 1.85,
				angle = 0,
				step = (2 * Math.PI) / dot.length;
//		console.log("radius = " + radius);
		dot.each(function () {
			
			var dotRadius = $(this).width() / 2,
				startX = start.left + gearWidth / 2,
				startY = start.top + gearWidth / 2;
					//equation of a circle
					//x = originX + r * cos(angle in radians, or angle plus step in this case)
					//y = originY + r * sin(same as for x)
			var x = (startX + radius * Math.cos(angle)),
				y = (startY + radius * Math.sin(angle));
//			console.log($(this).text(), x, y);
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
		});
	}

//	$("form").on("submit", function () {
//		createDots();
//	});

	$(window).on('resize', function () {
		distributeDots();
	});



//	createDots();
	distributeDots();


	$(".shadow").click(function () {
		$(this).find('img').css(
				'box-shadow', '0px 0px 0px black'
				);
	});
});



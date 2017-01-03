var Popup = (function(options) {
	var settings = {
		container: "body",	//container for the popup if the popup does not exist
		id: "#popup",	//selector for the popup if it exists, or to use if created
		page: "page.html",	//page of the popup HTML
		loading: "#loading",	//selector for the loading overlay, this is the default
		afterShow: function() {
			
		}
	};
	
	
	$.extend(settings, options);
	
	var popup = $(settings.id);
	if (popup.length === 0) {
		popup = $('<div id="'+settings.id+'" class="popup"/>');
		$(settings.container).append(popup);
		popup.on("click",".close", function() {
			hide();
		})
	}
	else {
		popup.hide();
	}
	
	function show() {
		$("#modal").show();
		var loader = setTimeout(function() {
			$(settings.loading).show();
		},100);
		popup.empty().load(settings.page, {}, function() {
			clearTimeout(loader);
			popup.append('<img class="close" src="images/close.png"/>');
				//This doesn't work in Internet Explorer (Russell)
			$(settings.loading).hide();
			popup.fadeIn(250);
			settings.afterShow();
		});
	}
	
	function hide() {
		$("#modal").hide();
		popup.fadeOut(250, function() {
			/*popup.remove(); Why is this necessary? Hope I haven't broken
			*				  somebody else's code by taking this out.
			*				  All I know is that it broke my code.
			*				  Russell Stinson				
			*/
		});
		
	}
	
	return {
		show: show,
		hide: hide
	};
});

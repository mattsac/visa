$(document).ready(function() {
	$('.nav-item').click(function() {
		var thisItem = $(this);
		var navMarker = $('.nav-marker');
		var markerPosition = thisItem.offset().left + thisItem.width()/2 - 13;

		//reset active nav element
		$('.nav-item a').removeClass('active');
		thisItem.find('a').addClass('active');

		//check if marker is already showing and animate the move to the new active element, otherwise show the marker
		if (navMarker.is(':visible')) {
			$('.nav-marker').animate({ 
			    left: markerPosition,
			}, 1000);
		} else {
			navMarker.offset({left: markerPosition});
			navMarker.show();
		}
	});
});
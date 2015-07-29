Box.Application.addBehavior('dropdown', function(context) {

	$(document).on('click', function(e) {
		if (!$(e.target).closest('.dropdown').length) {
			$('.dropdown-content').hide();
		}
    });

	return {
		onclick: function(e, element, elementType) {
			var el 		= $(element),
				area 	= el.parent().find(el.attr('dropdown-content')),
				button 	= el;

			if (elementType !== 'dropdown') return false;

			if (area.is(':visible')) {
				$('.dropdown-content').hide();
			} else {
				$('.dropdown-content').hide();
				area.toggle();
			}

			return false;			
		}
	};
});
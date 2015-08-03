Box.Application.addBehavior('dropdown', function(context) {
	'use strict';

	var $ = context.getGlobal('jQuery');

	return {
		init: function() {
			$(document).on('click', function(e) {
				if (!$(e.target).closest('.dropdown').length) {
					$('.dropdown-content').hide();
				}
		    });
		},
		onclick: function(e, element, elementType) {
			var el 		= $(element),
				area 	= el.parent().find(el.attr('dropdown-content')),
				button 	= el;

			if (elementType !== 'dropdown') return false;

			$('.dropdown-content').hide();
			
			area.toggle();

			return false;			
		}
	};
});
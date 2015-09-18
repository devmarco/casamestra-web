/* global Box */

const $ = require('jQuery');

Box.Application.addBehavior('dropdown', context => {
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
				area 	= el.parent().find(el.data('dropdown-content'));

			if (elementType !== 'dropdown') return false;

			$('.dropdown-content').hide();

			area.toggle();

			return false;
		}
	};
});

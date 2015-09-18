/* global Box */

const $ = require('jQuery');

Box.Application.addBehavior('dropdown', () => {
	return {
		init: function() {
			$(document).on('click', function(e) {
				if (!$(e.target).closest('.dropdown').length) {
					$('.dropdown-content').hide();
				}
			});
		},
		onclick: function(e, element, elementType) {
			const el 	= $(element);
			const area 	= el.parent().find(el.data('dropdown-content'));

			if (elementType !== 'dropdown') return false;

			if (area.is(':visible')) {
				area.toggle();
			} else {
				$('.dropdown-content').hide();
				area.toggle();
			}

			return false;
		},
	};
});

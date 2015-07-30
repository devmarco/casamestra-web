Box.Application.addModule('EstatesList', function(context) {
	'use strict';

	var estates = context.getService('renderService');

	return {
		init: function() {
			estates.render({
				limit: 12,
				fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area'
			});
		}
	}
});
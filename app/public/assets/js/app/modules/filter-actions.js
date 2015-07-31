Box.Application.addModule('EstatesFilter', function(context) {
	'use strict';

	var filter 	= context.getService('filterService');

	var actions = {
		filterByNeighborhood: function() {

		},
		filterByBathrooms: function(el) {
			var value = $(el).data('value');

			//Set active class
			$(el).toggleClass('active');

			//Send message
			filter.set({
				prop: 'bathrooms',
				value: value
			});
		},
		filterByBedrooms: function(el) {
			var value = $(el).data('value');

			//Set active class
			$(el).toggleClass('active');

			//Send message
			filter.set({
				prop: 'bedrooms',
				value: value
			});
		},
		filterByPrice: function(el) {
			var amount = $(el).data('value'),
				value = $(el).val();

			//Send message
			filter.set({
				prop: 'price',
				value: value || 0,
				amount: amount
			});
		}
	};

	return {
		behaviors: ['dropdown'],
		onclick: function(event, element, elementType) {
			if (elementType === 'f-bedrooms') actions.filterByBedrooms(element);
			if (elementType === 'f-bathrooms') actions.filterByBathrooms(element);
		},
		onchange: function(event, element, elementType) {
			if (elementType === 'f-price') actions.filterByPrice(element);
		}
	}
});
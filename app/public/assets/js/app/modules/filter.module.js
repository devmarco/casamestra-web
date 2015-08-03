Box.Application.addModule('filter', function(context) {
	'use strict';

	var $ 			= context.getGlobal('jQuery'),
		_filter 	= context.getService('filter.service');

	var actions = {
		filterByNeighborhood: function() {

		},
		filterByBathrooms: function(el) {
			var value = $(el).data('value');

			//Set active class
			$(el).toggleClass('active');

			//Send message
			_filter.set({
				prop: 'bathrooms',
				value: value
			});
		},
		filterByBedrooms: function(el) {
			var value = $(el).data('value');

			//Set active class
			$(el).toggleClass('active');

			//Send message
			_filter.set({
				prop: 'bedrooms',
				value: value
			});
		},
		filterByPrice: function(el) {
			var amount = $(el).data('value'),
				value = $(el).val();

			//Send message
			_filter.set({
				prop: 'price',
				value: value || 0,
				amount: amount
			});
		},
		filterByOrder: function() {
			
		},
		displayRender: function(el) {
			var content = $(el).data('content'),
				option = $(el).data('option');

			if ($(el).hasClass('active')) return false;

			$('.js-chose-type').removeClass('active');
			$('.js-render-option').removeClass('active');

			$(el).addClass('active');
			$(content).addClass('active');	
		}
	};

	return {
		behaviors: ['dropdown'],
		onclick: function(event, element, elementType) {
			if (elementType === 'f-bedrooms') 	actions.filterByBedrooms(element);
			if (elementType === 'f-bathrooms') 	actions.filterByBathrooms(element);
			if (elementType === 'f-render') 	actions.displayRender(element);
		},
		onchange: function(event, element, elementType) {
			if (elementType === 'f-price') actions.filterByPrice(element);
		},
		init: function() {
			//Get the element
			var element = context.getElement();			

			$(window).scroll(function() {
				($(window).scrollTop() >= 80) ? $(element).addClass('scroll-active') : $(element).removeClass('scroll-active');
			});
		}
	}
});
Box.Application.addModule('estates.filter', function(context) {
	'use strict';

	var $ 			= context.getGlobal('jQuery'),
		_filter 	= context.getService('filter.service');

	return {
		behaviors: ['dropdown'],
		onclick: function(event, element, elementType) {
			if (elementType === 'f-bedrooms') filterByBedrooms(element);
			if (elementType === 'f-bathrooms') filterByBathrooms(element);
			if (elementType === 'f-render') displayRender(element);
		},
		onchange: function(event, element, elementType) {
			if (elementType === 'f-price') filterByPrice(element);
		},
		init: function() {
			//Get the element
			var element = context.getElement();		

			window.onscroll = function(e) {
				(e.target.scrollingElement.scrollTop >= 80) ? $(element).addClass('scroll-active') : $(element).removeClass('scroll-active');
			}	
		}
	}

	function filterByNeighborhood() {

	}

	function filterByBathrooms(el) {
		var value = $(el).data('value');

		//Set active class
		$(el).toggleClass('active');

		//Send message
		_filter.set({
			prop: 'bathrooms',
			value: value
		});
	}

	function filterByBedrooms(el) {
		var value = $(el).data('value');

		//Set active class
		$(el).toggleClass('active');

		//Send message
		_filter.set({
			prop: 'bedrooms',
			value: value
		});
	}

	function filterByPrice(el) {
		var amount = $(el).data('value'),
			value = $(el).val();

		//Send message
		_filter.set({
			prop: 'price',
			value: value || 0,
			amount: amount
		});
	}

	function filterByOrder() {
		
	}

	function displayRender(el) {
		// var content = $(el).data('content'),
		// 	option = $(el).data('option');

		// if ($(el).hasClass('active')) return false;

		// $('.js-chose-type').removeClass('active');
		// $('.js-render-option').removeClass('active');

		// $(el).addClass('active');
		// $(content).addClass('active');	
	}
});
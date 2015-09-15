/* global Box */

'use strict';

Box.Application.addModule('filter', function (context) {
	var $ = context.getGlobal('jQuery');
	var _filter = context.getService('filter.service');

	function filterByBathrooms(el) {
		var value = $(el).data('value');

		$(el).toggleClass('active');

		_filter.set({
			prop: 'bathrooms',
			value: value
		});
	}

	function filterByBedrooms(el) {
		var value = $(el).data('value');

		$(el).toggleClass('active');

		_filter.set({
			prop: 'bedrooms',
			value: value
		});
	}

	function filterByPrice(el) {
		var amount = $(el).data('value');
		var value = $(el).val();

		_filter.set({
			prop: 'price',
			value: value || 0,
			amount: amount
		});
	}

	function renderMap() {
		$('main').removeClass('list-active').addClass('map-active');

		Box.Application.broadcast('changeView', 'map');
	}

	function renderList() {
		$('main').removeClass('map-active').addClass('list-active');

		Box.Application.broadcast('changeView', 'list');
	}

	return {
		behaviors: ['dropdown'],
		onclick: function onclick(event, element, elementType) {
			if (elementType === 'f-bedrooms') filterByBedrooms(element);
			if (elementType === 'f-bathrooms') filterByBathrooms(element);
			if (elementType === 'f-map') renderMap();
			if (elementType === 'f-list') renderList();
		},
		onchange: function onchange(event, element, elementType) {
			if (elementType === 'f-price') filterByPrice(element);
		},
		init: function init() {
			var element = context.getElement();

			window.onscroll = function (e) {
				return e.target.scrollingElement.scrollTop >= 80 ? $(element).addClass('scroll-active') : $(element).removeClass('scroll-active');
			};
		}
	};
});

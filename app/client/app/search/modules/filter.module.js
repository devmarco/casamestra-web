/* global Box */

Box.Application.addModule('filter', context => {
	const $ 		= context.getGlobal('jQuery');
	const _filter 	= context.getService('filter.service');

	function filterByBathrooms(el) {
		const value = $(el).data('value');

		$(el).toggleClass('active');

		_filter.set({
			prop: 'bathrooms',
			value: value,
		});
	}

	function filterByBedrooms(el) {
		const value = $(el).data('value');

		$(el).toggleClass('active');

		_filter.set({
			prop: 'bedrooms',
			value: value,
		});
	}

	function filterByPrice(el) {
		const amount = $(el).data('value');
		const value  = $(el).val();

		_filter.set({
			prop: 'price',
			value: value || 0,
			amount: amount,
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
		onclick: (event, element, elementType) => {
			if (elementType === 'f-bedrooms') filterByBedrooms(element);
			if (elementType === 'f-bathrooms') filterByBathrooms(element);
			if (elementType === 'f-map') renderMap();
			if (elementType === 'f-list') renderList();
		},
		onchange: (event, element, elementType) => {
			if (elementType === 'f-price') filterByPrice(element);
		},
		init: () => {
			const element = context.getElement();

			window.onscroll = e => (e.target.scrollingElement.scrollTop >= 80) ? $(element).addClass('scroll-active') : $(element).removeClass('scroll-active');
		},
	};
});

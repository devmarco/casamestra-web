/* global Box */

Box.Application.addModule('map', context => {
	const _render  = context.getService('render.service');
	const _storage = context.getService('storage.service');
	const _estates = context.getService('estates.service');

	const $ = context.getGlobal('jQuery');

	return {
		messages: ['newFilter', 'changeView'],
		onmessage: function(name, value) {
			if (name === 'newFilter') this.renderFilter(value);
			if (name === 'changeView' && value === 'map') this.renderView();
		},
		renderFilter: function(value) {
			_storage.set('public', value.data, value.filters);

			if (_storage.view.isMap()) {
				_render.update({
					data: value.data,
				});
			}
		},
		renderView: function() {
			_storage.view.set('map');
			_render.map(_storage.get().data);
		},
		init: function() {
			if (_storage.view.isMap()) {
				$('main').addClass('map-active');

				_estates.get({
					fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title,cmid',
				}).then(data => {
					_storage.set('private', data);
					_render.map(data);
				});
			}
		},
	};
});

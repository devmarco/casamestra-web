Box.Application.addModule('map', function(context) {
	'use strict';

	var _render  = context.getService('render.service'),
		_storage = context.getService('storage.service'),
		_estates = context.getService('estates.service');

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
					data: value.data
				});
			}
		},
		renderView: function() {
			_storage.view.set('map');
			_render.map(_storage.get().data);
		},
		init: function() {
			if (_storage.view.isMap()) {

				//Display the map
				$('main').addClass('map-active');

				//Load data
				_estates.get({
					fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title,cmid'
				}).then(function(data) {
					_storage.set('private', data);
					_render.map(data);
				});
			}
		}
	}
});
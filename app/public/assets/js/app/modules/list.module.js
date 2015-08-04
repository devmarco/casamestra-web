Box.Application.addModule('estates.list', function(context) {
	'use strict';

	var _render  = context.getService('render.service'),
		_estates = context.getService('estates.service'),
		_storage = context.getService('storage.service');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter', 'markerHover'],
		onmessage: function(name, value) {

			if (name === 'newFilter') filterEstates();
			
			function filterEstates() {
				_storage.set(value.data);
				_render.update({
					data: _.slice(value.data, 0, 12),
					filters: value.filters
				});
			}
        },
		init: function() {
			if (_storage.userPreferences.list()) {

				//Set map as active
				$('main').addClass('list-active');

				_estates.get({
					fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title'
				}).then(function(data) {
					_storage.set(data, 'private');
					_render.render({
						data: _.slice(data, 0, 12),
						listClass: '.render-area',
						mapClass: '#map-canvas'
					});
				});
			}
		}
	}
});
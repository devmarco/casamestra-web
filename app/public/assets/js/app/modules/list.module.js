Box.Application.addModule('estates.list', function(context) {
	'use strict';

	var _render  = context.getService('render.service'),
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
				$('main').removeClass('map-active').addClass('list-active');
				_render.list();
			}
		}
	}
});
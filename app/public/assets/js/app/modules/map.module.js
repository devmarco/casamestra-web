Box.Application.addModule('estates.map', function(context) {
	'use strict';

	var _render  = context.getService('render.service'),
		_storage = context.getService('storage.service');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter'],
		onmessage: function(name, value) {

			if (name === 'newFilter') filterEstates();
			
			function filterEstates() {
				_storage.set(value.data);
				_render.update({
					data: value.data,
					filters: value.filters
				});
			}
        },
		init: function() {
			if (_storage.userPreferences.map()) {
				$('main').removeClass('list-active').addClass('map-active');
				_render.map();
			}
		}
	}
});
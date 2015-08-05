Box.Application.addModule('estates.map', function(context) {
	'use strict';

	var _render  = context.getService('render.service'),
		_storage = context.getService('storage.service'),
		_view 	 = context.getService('view.service');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter', 'markerHover'],
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
				_view.map();
			}
		}
	}
});
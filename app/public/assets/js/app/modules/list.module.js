Box.Application.addModule('list', function(context) {
	'use strict';

	var _render  = context.getService('render.service'),
		_estates = context.getService('estates.service'),
		_cache	 = context.getService('cache.service');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter', 'markerHover'],
		onmessage: function(name, value) {

			if (name === 'newFilter') filterEstates();
			
			function filterEstates() {
				_cache.set(value.data);
				_render.update({
					data: _.slice(value.data, 0, 12),
					filters: value.filters
				});
			}
        },
		init: function() {
			_estates.get({
				fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title'
			}).then(function(data) {
				_cache.set(data, 'private');
				_render.render({
					data: data,
					listClass: '.render-area',
					mapClass: '#map-canvas'
				});
			});
		}
	}
});
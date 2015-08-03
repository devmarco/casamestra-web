Box.Application.addModule('list', function(context) {
	'use strict';

	var _render  = context.getService('render.service'),
		_estates = context.getService('estates.service'),
		_cache	 = context.getService('cache.service');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter'],
		onmessage: function(name, value) {
			_cache.set(value.data);
			_render.update({
				data: _.slice(value.data, 0, 12),
				filters: value.filters
			});
        },
		init: function() {
			_estates.get({
				fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area'
			}).then(function(data) {
				_cache.set(data, 'private');
				_render.render({
					data: data,
					elementClass: '.render-area'
				});
			});
		}
	}
});
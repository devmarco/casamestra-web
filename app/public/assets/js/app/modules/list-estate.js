Box.Application.addModule('EstatesList', function(context) {
	'use strict';

	var _render = context.getService('render-estates'),
		_estates = context.getService('estates');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter'],
		onmessage: function(name, value) {
			_render.update(_.slice(value.data, 0, 12), value.filters);
        },
		init: function() {
			_estates.get({
				fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area'
			}).then(function(data) {
				_render.render(data);
				_estates.cache.set(data, 'private');
			});
		}
	}
});
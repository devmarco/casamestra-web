Box.Application.addService('view.service', function(application) {
	'use strict';

	var _render  = application.getService('render.service'),
		_estates = application.getService('estates.service'),
		_storage = application.getService('storage.service');

	return {
		map: function() {

			$('main').addClass('map-active');

			_estates.get({
				fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title'
			}).then(function(data) {
				_storage.set(data, 'private');
				_render.renderMap({
					data: data,
					mapClass: 'map--big',
					bounds: true
				});
			});
		},
		list: function() {

			$('main').addClass('list-active');

			_estates.get({
				fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title'
			}).then(function(data) {
				_storage.set(data, 'private');
				_render.renderList({
					data: _.slice(data, 0, 12),
					listClass: '.render-area',
					mapClass: 'map--small',
					bounds: true
				});
			});
		}
	}
});
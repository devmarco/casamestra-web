/* global Box */

'use strict';

Box.Application.addModule('map', function (context) {
	var _render = context.getService('render.service');
	var _storage = context.getService('storage.service');
	var _estates = context.getService('estates.service');

	var $ = context.getGlobal('jQuery');

	return {
		messages: ['newFilter', 'changeView'],
		onmessage: function onmessage(name, value) {
			if (name === 'newFilter') undefined.renderFilter(value);
			if (name === 'changeView' && value === 'map') undefined.renderView();
		},
		renderFilter: function renderFilter(value) {
			_storage.set('public', value.data, value.filters);

			if (_storage.view.isMap()) {
				_render.update({
					data: value.data
				});
			}
		},
		renderView: function renderView() {
			_storage.view.set('map');
			_render.map(_storage.get().data);
		},
		init: function init() {
			if (_storage.view.isMap()) {
				$('main').addClass('map-active');

				_estates.get({
					fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title,cmid'
				}).then(function (data) {
					_storage.set('private', data);
					_render.map(data);
				});
			}
		}
	};
});

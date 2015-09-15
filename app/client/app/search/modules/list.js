/* global Box */

'use strict';

Box.Application.addModule('list', function (context) {
	var _render = context.getService('render.service');
	var _storage = context.getService('storage.service');
	var _estates = context.getService('estates.service');

	var _ = context.getGlobal('_');
	var $ = context.getGlobal('jQuery');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter', 'changeView'],
		onmessage: function onmessage(name, value) {
			if (name === 'newFilter') undefined.renderFilter(value);
			if (name === 'changeView' && value === 'list') undefined.renderView();
		},
		renderFilter: function renderFilter(value) {
			_storage.set('public', value.data, value.filters);

			if (_storage.view.isList()) {
				_render.update({
					data: _.slice(value.data, 0, 12)
				});
			}
		},
		renderView: function renderView() {
			_storage.view.set('list');
			_render.list(_storage.get().data);
		},
		init: function init() {
			if (_storage.view.isList()) {
				$('main').addClass('list-active');

				_estates.get({
					fields: 'images,price,keyDetails,garages,address,bathrooms,bedrooms,location,title,ecmid'
				}).then(function (data) {
					_storage.set('private', data);
					_render.list(_.slice(data, 0, 12));
				});
			}
		}
	};
});

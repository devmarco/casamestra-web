Box.Application.addModule('list', function(context) {
	'use strict';

	var _render  = context.getService('render.service'),
		_storage = context.getService('storage.service'),
		_estates = context.getService('estates.service');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter', 'changeView'],
		onmessage: function(name, value) {
			if (name === 'newFilter') this.renderFilter(value);
			if (name === 'changeView' && value === 'list') this.renderView();
		},
		renderFilter: function(value) {
			_storage.set('public', value.data, value.filters);

			if (_storage.view.isList()) {
				_render.update({
					data: _.slice(value.data, 0, 12)
				});
			}
		},
		renderView: function() {
			_storage.view.set('list');
			_render.list(_storage.get().data);
		},	
		init: function() {
			if (_storage.view.isList()) {

				//Display the list
				$('main').addClass('list-active');

				//Load the data
				_estates.get({
					fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title,cmid'
				}).then(function(data) {
					_storage.set('private', data);
					_render.list(_.slice(data, 0, 12));
				});
			}
		}
	}
});
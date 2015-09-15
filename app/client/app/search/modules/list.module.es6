/* global Box */

Box.Application.addModule('list', context => {
	const _render  = context.getService('render.service');
	const _storage = context.getService('storage.service');
	const _estates = context.getService('estates.service');

	const _ = context.getGlobal('_');
	const $ = context.getGlobal('jQuery');

	return {
		behaviors: ['pagination'],
		messages: ['newFilter', 'changeView'],
		onmessage: (name, value) => {
			if (name === 'newFilter') this.renderFilter(value);
			if (name === 'changeView' && value === 'list') this.renderView();
		},
		renderFilter: (value) => {
			_storage.set('public', value.data, value.filters);

			if (_storage.view.isList()) {
				_render.update({
					data: _.slice(value.data, 0, 12),
				});
			}
		},
		renderView: () => {
			_storage.view.set('list');
			_render.list(_storage.get().data);
		},
		init: () => {
			if (_storage.view.isList()) {
				$('main').addClass('list-active');

				_estates.get({
					fields: 'images,price,keyDetails,garages,address,bathrooms,bedrooms,location,title,ecmid',
				}).then(data => {
					_storage.set('private', data);
					_render.list(_.slice(data, 0, 12));
				});
			}
		},
	};
});

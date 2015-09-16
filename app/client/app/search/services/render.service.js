/* global Box */

const React = require('react');
const Search = require('../components/search');

Box.Application.addService('render.service', application => {
	const _storage 		= application.getService('storage.service');
	const _utils 		= application.getService('utils.service');
	const _map 	  		= application.getService('map.service');
	const EstatesList 	= application.getService('estates.component');

	const _ 		= application.getGlobal('_');

	let view;

	return {
		update: config => {
			EstatesList.render(document.querySelector('.render-area'), config.data);

			_map.update(config.data);

			_utils.updateTexts(_storage.get().filters, config.pagination || null);
		},
		map: data => {
			if (view) view.remove();

			_map.destroy();

			_map.render({
				mapClass: 'map--big',
				markers: data,
				bounds: true,
				zoomControl: true,
				cluster: true,
			});

			_utils.updateTexts(_storage.get().filters);
		},
		list: data => {
			_map.destroy();

			React.render(<Search />, document.querySelector('main'));

			_map.render({
				mapClass: 'map--small',
				markers: _.slice(data, 0, 12),
				bounds: true,
				zoomControl: false,
				cluster: false,
			});

			_utils.updateTexts(_storage.get().filters);
		},
	};
});

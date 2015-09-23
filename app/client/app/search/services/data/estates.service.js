/* global Box */

const $ = require('jquery');

Box.Application.addService('estates.service', () => {
	return {
		get: config => {
			const limit 	= (config.limit) ? 'limit=' + config.limit || 10 + '' : '';
			const fields 	= (config.fields) ? '&fields=' + config.fields + '' : '';
			const action 	= (location.pathname.indexOf('comprar') !== -1) ? 'buy' : 'rent';

			return $.ajax({
				url: `http://127.0.0.1:8085/estates/${action}?${limit}${fields}`,
			});
		},
	};
});

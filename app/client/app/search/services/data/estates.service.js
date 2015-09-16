/* global Box */

Box.Application.addService('estates.service', application => {
	const $ = application.getGlobal('jQuery');

	return {
		get: config => {
			const limit = (config.limit) ? 'limit=' + config.limit || 10 + '' : '';
			const fields = (config.fields) ? '&fields=' + config.fields + '' : '';
			const isBuy = location.pathname.indexOf('comprar');
			let request;

			if (isBuy !== -1) {
				request = 'http://127.0.0.1:8081/estates/buy?' + limit + fields + '';
			} else {
				request = 'http://127.0.0.1:8081/estates/rent?' + limit + fields + '';
			}

			return $.ajax({
				url: request,
			});
		},
		create: () => {

		},
		update: () => {

		},
		remove: () => {

		},
	};
});

/* global Box */

'use strict';

Box.Application.addService('estates.service', function (application) {
	var $ = application.getGlobal('jQuery');

	return {
		get: function get(config) {
			var limit = config.limit ? 'limit=' + config.limit || 10 + '' : '';
			var fields = config.fields ? '&fields=' + config.fields + '' : '';
			var isBuy = location.pathname.indexOf('comprar');
			var request = undefined;

			if (isBuy !== -1) {
				request = 'http://127.0.0.1:8081/estates/buy?' + limit + fields + '';
			} else {
				request = 'http://127.0.0.1:8081/estates/rent?' + limit + fields + '';
			}

			return $.ajax({
				url: request
			});
		},
		create: function create() {},
		update: function update() {},
		remove: function remove() {}
	};
});

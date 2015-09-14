Box.Application.addService('estates.service', function addService(application) {
	'use strict';

	var $ = application.getGlobal('jQuery');

	return {
		get: function get(config) {
			var limit 	= (config.limit) ? 'limit='+config.limit || 10+'' : '';
			var fields 	= (config.fields) ? '&fields='+config.fields+'' : '';
			var isBuy 	= location.pathname.indexOf('comprar');

			if (isBuy !== -1) {
				return $.ajax({
					url: 'http://127.0.0.1:8081/estates/buy?'+ limit+fields +''
				});
			} else {
				return $.ajax({
					url: 'http://127.0.0.1:8081/estates/rent?'+ limit+fields +''
				});
			}
		},
		create: function create() {

		},
		update: function update() {

		},
		delete: function delet() {

		},
	};
});

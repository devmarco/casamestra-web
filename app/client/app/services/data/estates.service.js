Box.Application.addService('estates.service', function(application) {
	'use strict';

	var $ = application.getGlobal('jQuery');

	return {
		get: function(config) {
			var limit 	= (config.limit) ? 'limit='+config.limit || 10+'' : '',
				fields 	= (config.fields) ? '&fields='+config.fields+'' : '',
				isBuy = location.pathname.indexOf('comprar');

			if (isBuy !== -1) {
				return $.ajax({
					url: 'http://0.0.0.0:8081/estates/buy?'+limit+fields+''
				});
			} else {
				return $.ajax({
					url: 'http://0.0.0.0:8081/estates/rent?'+limit+fields+''
				});
			}
		},
		create: function() {

		},
		update: function() {

		},
		delete: function() {

		}
	}
});

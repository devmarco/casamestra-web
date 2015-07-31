Box.Application.addService('estates', function(application) {

	var publicData,
		privateData;

	return {
		get: function(config) {
			var limit 	= (config.limit) ? 'limit='+config.limit || 10+'' : '',
				fields 	= (config.fields) ? '&fields='+config.fields+'' : '';

			return $.ajax({
				url: 'http://0.0.0.0:8000/estates?'+limit+fields+''
			});
		},
		create: function() {

		},
		update: function() {

		},
		delete: function() {

		},
		cache: {
			get: function(config) {
				if (config === 'private') {
					return privateData;
				}

				return publicData || privateData;
			},
			set: function(data, config) {
				if (config === 'private') {
					privateData = data;
					return false;
				}

				publicData = data;
			}
		}
	}
});
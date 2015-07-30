Box.Application.addService('estates', function(application) {

	var cachedEstates;

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
			get: function() {
				return cachedEstates;
			},
			set: function(data) {
				cachedEstates = data;
			}
		}
	}
});
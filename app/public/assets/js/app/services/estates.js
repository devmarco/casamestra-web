Box.Application.addService('estates', function(application) {
	return {
		get: function() {
			return $.ajax({
				url: 'http://0.0.0.0:8000/estates?limit=10'
			});
		},
		create: function() {

		},
		update: function() {

		},
		delete: function() {

		}
	}
});
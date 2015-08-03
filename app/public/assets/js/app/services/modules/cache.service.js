Box.Application.addService('cache.service', function(application) {
	'use strict';

	var publicData,
		privateData;

	return {
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
});
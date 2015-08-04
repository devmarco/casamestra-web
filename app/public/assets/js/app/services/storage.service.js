Box.Application.addService('storage.service', function(application) {
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
		},
		userPreferences: {
			map: function() {
				if (window.localStorage.getItem('cmview')) {
					if (window.localStorage.getItem('cmview') === 'map') return true;
					return false;
				} else {
					return true;
				}
			},
			list: function() {
				if (window.localStorage.getItem('cmview') === 'list') return true;
				return false;
			},
			set: function(option) {
				if (option && option === 'map' || option === 'list') {
					window.localStorage.setItem('cmview', option);
				}

				return false;
			}
		}
	}
});
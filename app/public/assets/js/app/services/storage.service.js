Box.Application.addService('storage.service', function(application) {
	'use strict';

	var publicData,
		privateData,
		publicFilters,
		view;

	return {
		get: function(config) {
			if (config === 'private') {
				return {
					data: privateData,
					filters: publicFilters || {}
				};
			}

			return {
				data: publicData || privateData,
				filters: publicFilters || {}
			};
		},
		set: function(config, data, filters) {
			if (config === 'private') {
				privateData = data;
				return false;
			}

			publicData = data;
			if (filters) publicFilters = filters;
		},
		view: {
			get: function() {
				return view;
			},
			set: function(viewType) {
				view = viewType;
			}
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
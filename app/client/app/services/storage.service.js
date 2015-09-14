Box.Application.addService('storage.service', function(application) {
	'use strict';

	var publicData,
		privateData,
		publicFilters;

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
			isMap: function() {
				var view = window.localStorage.getItem('cmview');

				if (view) {
					if (view === 'map') return true;
					return false;
				} else {
					return true;
				}
			},
			isList: function() {
				var view = window.localStorage.getItem('cmview');

				if (view === 'list') return true;

				return false;
			},
			set: function(option) {
				if (option && option === 'map' || option === 'list') {
					window.localStorage.setItem('cmview', option);
				}
			}
		}
	}
});
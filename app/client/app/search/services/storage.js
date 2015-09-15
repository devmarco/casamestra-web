/* global Box */

'use strict';

Box.Application.addService('storage.service', function () {
	var publicData = undefined;
	var privateData = undefined;
	var publicFilters = undefined;

	return {
		get: function get(config) {
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
		set: function set(config, data, filters) {
			if (config === 'private') {
				privateData = data;
				return false;
			}

			publicData = data;
			if (filters) publicFilters = filters;
		},
		view: {
			isMap: function isMap() {
				var view = window.localStorage.getItem('cmview');

				if (view && view === 'map') return true;

				if (view) return false;

				return true;
			},
			isList: function isList() {
				var view = window.localStorage.getItem('cmview');

				if (view === 'list') return true;

				return false;
			},
			set: function set(option) {
				if (option && option === 'map' || option === 'list') {
					window.localStorage.setItem('cmview', option);
				}
			}
		}
	};
});

/* global Box */

Box.Application.addService('storage.service', () => {
	let publicData;
	let privateData;
	let publicFilters;

	return {
		get: config => {
			if (config === 'private') {
				return {
					data: privateData,
					filters: publicFilters || {},
				};
			}

			return {
				data: publicData || privateData,
				filters: publicFilters || {},
			};
		},
		set: (config, data, filters) => {
			if (config === 'private') {
				privateData = data;
				return false;
			}

			publicData = data;
			if (filters) publicFilters = filters;
		},
		view: {
			isMap: () => {
				const view = window.localStorage.getItem('cmview');

				if (view && view === 'map') return true;

				if (view) return false;

				return true;
			},
			isList: () => {
				const view = window.localStorage.getItem('cmview');

				if (view === 'list') return true;

				return false;
			},
			set: option => {
				if (option && option === 'map' || option === 'list') {
					window.localStorage.setItem('cmview', option);
				}
			},
		},
	};
});

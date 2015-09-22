let publicData;
let privateData;
let publicFilters;

const get = config => {
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
};

const set = (config, data, filters) => {
	if (config === 'private') {
		privateData = data;
		return false;
	}

	publicData = data;
	if (filters) publicFilters = filters;
};

const view = {
	get: () => {
		if (window.localStorage) {
			console.log('Enter');
			const viewOption = window.localStorage.getItem('cmview');
			if (viewOption) return viewOption;
		}

		return 'map';
	},
	set: option => {
		if (window.localStorage) {
			if (option && option === 'map' || option === 'list') {
				window.localStorage.setItem('cmview', option);
			}
		}
	},
};

module.exports = { get, set, view };

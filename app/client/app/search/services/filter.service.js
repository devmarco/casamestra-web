const _ 		= require('lodash');
const storage 	= require('./storage.service');

const get = (filters) => {
	const data = storage.get('private').data;
	let filteredObject = [];

	if (_.isEmpty(filters)) {
		filteredObject = data;
		return { filteredObject, filters };
	}

	// function checkBathrooms(filter, item) {
	//
	// 	if (filter === 5 && item >= filter) {
	// 		return true;
	// 	} else if (item === filter) {
	// 		return true;
	// 	}
	//
	// 	return false;
	// }

	const checkValues = (filter, item) => {
		let isValid = false;

		if (filter.indexOf(5) !== -1) {
			filter.forEach(value => {
				if (value === 5 && item >= value) {
					isValid = true;
				} else {
					if (value === item) {
						isValid = true;
					}
				}
			});
		} else {
			if (_.includes(filter, item)) isValid = true;
		}

		return isValid;
	}

	const checkPrice = (filter, price) => {
		const min = filter.min || 0;
		const max = filter.max || 100000000;

		if (price >= min && price <= max) return true;
		return false;
	}

	const checkFilterValue = item => {
		let i;

		let filterCount = 0;
		let isAble = 0;

		for (i in filters) {
			const currentItem = item[i];
			const currentFilter = filters[i];

			filterCount++;

			switch (i) {
			case 'price':
				(checkPrice(currentFilter, currentItem)) ? isAble++ : false;
				break;
			default:
				checkValues(currentFilter, currentItem) ? isAble++ : false;
				break;
			}
		}

		if (isAble === filterCount) {
			filteredObject.push(item);
		}
	}

	_.filter(data, item => checkFilterValue(item));

	storage.set('public', filteredObject, filters);

	return { filteredObject, filters }
}

module.exports = { get };

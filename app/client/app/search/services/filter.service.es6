/* global Box */

Box.Application.addService('filter.service', application => {
	const _storage = application.getService('storage.service');
	const filters  = {};

	const $ = application.getGlobal('jQuery');
	const _ = application.getGlobal('_');

	return {
		set: filter => {
			function isPrice() {
				if (!filters[filter.prop]) filters[filter.prop] = {min: '', max: ''};

				if (filter.amount === 'min') filters[filter.prop].min = filter.value;
				if (filter.amount === 'max') filters[filter.prop].max = filter.value;

				if (filters[filter.prop].min === 0 && filters[filter.prop].max === 0) {
					delete filters[filter.prop];
				}
			}

			function isGeneric() {
				(!filters[filter.prop]) ? filters[filter.prop] = [] : false;

				const index = filters[filter.prop].indexOf(filter.value);

				if (index === -1) {
					filters[filter.prop].push(filter.value);
				} else {
					filters[filter.prop].splice(index, 1);
				}

				(!filters[filter.prop].length) ? delete filters[filter.prop] : false;
			}

			(filter.amount) ? isPrice() : isGeneric();

			this.filter();
		},
		filter: () => {
			const data = _storage.get('private').data;
			const filteredObject = [];

			if ($.isEmptyObject(filters)) {
				Box.Application.broadcast('newFilter', {
					data: data,
					filters: null,
				});

				return false;
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

			function checkValues(filter, item) {
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

			function checkPrice(filter, price) {
				const min = filter.min || 0;
				const max = filter.max || 100000000;

				if (price >= min && price <= max) return true;
				return false;
			}

			function checkFilterValue(item) {
				let i;

				let filterCount = 0;
				let isAble = 0;

				for (i in filters) {
					if (i) return;

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

			Box.Application.broadcast('newFilter', {
				data: filteredObject,
				filters: filters,
			});
		},
	};
});

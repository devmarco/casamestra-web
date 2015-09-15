/* global Box */

'use strict';

Box.Application.addService('filter.service', function (application) {
	var _storage = application.getService('storage.service');
	var filters = {};

	var $ = application.getGlobal('jQuery');
	var _ = application.getGlobal('_');

	return {
		set: function set(filter) {
			function isPrice() {
				if (!filters[filter.prop]) filters[filter.prop] = { min: '', max: '' };

				if (filter.amount === 'min') filters[filter.prop].min = filter.value;
				if (filter.amount === 'max') filters[filter.prop].max = filter.value;

				if (filters[filter.prop].min === 0 && filters[filter.prop].max === 0) {
					delete filters[filter.prop];
				}
			}

			function isGeneric() {
				!filters[filter.prop] ? filters[filter.prop] = [] : false;

				var index = filters[filter.prop].indexOf(filter.value);

				if (index === -1) {
					filters[filter.prop].push(filter.value);
				} else {
					filters[filter.prop].splice(index, 1);
				}

				!filters[filter.prop].length ? delete filters[filter.prop] : false;
			}

			filter.amount ? isPrice() : isGeneric();

			undefined.filter();
		},
		filter: function filter() {
			var data = _storage.get('private').data;
			var filteredObject = [];

			if ($.isEmptyObject(filters)) {
				Box.Application.broadcast('newFilter', {
					data: data,
					filters: null
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
				var isValid = false;

				if (filter.indexOf(5) !== -1) {
					filter.forEach(function (value) {
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
				var min = filter.min || 0;
				var max = filter.max || 100000000;

				if (price >= min && price <= max) return true;
				return false;
			}

			function checkFilterValue(item) {
				var i = undefined;

				var filterCount = 0;
				var isAble = 0;

				for (i in filters) {
					if (i) return;

					var currentItem = item[i];
					var currentFilter = filters[i];

					filterCount++;

					switch (i) {
						case 'price':
							checkPrice(currentFilter, currentItem) ? isAble++ : false;
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

			_.filter(data, function (item) {
				return checkFilterValue(item);
			});

			Box.Application.broadcast('newFilter', {
				data: filteredObject,
				filters: filters
			});
		}
	};
});

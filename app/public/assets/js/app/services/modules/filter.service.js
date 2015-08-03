Box.Application.addService('filter.service', function(application) {
	'use strict';

	var _cache 	= application.getService('cache.service'),
		filters = {};

	return {
		set: function(filter) { 
			var index;

			//Check if is price

			function isPrice() {
				(!filters[filter.prop]) ? filters[filter.prop] = {min: '', max: ''} : false;

				(filter.amount === 'min') ? filters[filter.prop].min = filter.value : false;
				(filter.amount === 'max') ? filters[filter.prop].max = filter.value : false;

				if (filters[filter.prop].min === 0 && filters[filter.prop].max === 0) {
					delete filters[filter.prop];
				}
			}

			function isGeneric() {
				(!filters[filter.prop]) ? filters[filter.prop] = [] : false;	

				index = filters[filter.prop].indexOf(filter.value);

				if (index === -1) {
					filters[filter.prop].push(filter.value);
				} else {
					filters[filter.prop].splice(index, 1);
				}

				(!filters[filter.prop].length) ? delete filters[filter.prop] : false;
			}

			(filter.amount) ? isPrice() : isGeneric();

			//Run
			this.filter();
		},
		filter: function() {
			var data = _cache.get('private'),
				filteredObject = [];

			if ($.isEmptyObject(filters)) {

				Box.Application.broadcast('newFilter', {
					data: data,
					filters: null
				});

				return false;
			}

			function checkFilterValue(item) {
				var currentItem,
					currentFilter,
					filterCount = 0,
					isAble = 0,
					i;

				for (i in filters) {

					currentItem = item[i];
					currentFilter = filters[i];

					filterCount++;

					switch(i) {
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

			function checkBathrooms(filter, item) {
			
				if (filter === 5 && item >= filter) {
					return true;
				} else if (item === filter) {
					return true;
				}

				return false;
			}

			function checkValues(filter, item) {
				var b = 0,
					isValid = false;

				if (filter.indexOf(5) !== -1) {
					for (b; b < filter.length; b++) {
						if (filter[b] === 5 && item >= filter[b]) {
							isValid = true;
							break;
						} else {
							if (filter[b] === item) {
								isValid = true;
								break;
							}
						}
					}

					return isValid;
				} else {
					if (_.includes(filter, item)) {
						return true;
					} else {
						return false;
					}
				}
			}

			function checkPrice(filter, price) {
				var min = filter.min || 0,
					max = filter.max || 100000000;

				if (price >= min && price <= max) return true;
				return false;
			}

			_.filter(data, function(item) {
				checkFilterValue(item);
			});

			Box.Application.broadcast('newFilter', {
				data: filteredObject,
				filters: filters
			});
		}
	}
});
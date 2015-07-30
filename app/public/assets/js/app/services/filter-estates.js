Box.Application.addService('filterService', function(context) {
	'use strict';

	var estates = context.getService('estates'),
		render  = context.getService('renderService'),

		filters = {};

	return {
		set: function(data) { 

			var indexValue;

			console.log('Set filter....');

			switch(data.prop) {
				case 'price':
				(!filters[data.prop]) ? filters[data.prop] = {max: '', min: ''} : false;

				(data.amount === 'max') ? filters[data.prop].max = data.value : filters[data.prop].min = data.value;

				break;
				case 'bedrooms':
				(!filters[data.prop]) ? filters[data.prop] = [] : false;

				indexValue = filters[data.prop].indexOf(data.value);

				(indexValue === -1) ? filters[data.prop].push(data.value) : filters[data.prop].splice(indexValue, 1);
				break;

				case 'bathrooms':
				(!filters[data.prop]) ? filters[data.prop] = 0 : false;

				filters[data.prop] = data.value;
				break;
			}

			//Run
			this.filter();
		},
		filter: function() {
			var data = estates.cache.get(),
				currentFilter,
				filteredObject = [],
				i;

			_.filter(data, function(item) {

				for (i in filters) {

					switch(i) {
						case 'bedrooms':
						if (_.includes(filters[i], item[i])) {
							filteredObject.push(item);
						}

						break;
						case 'bathrooms':

						if (item[i] === filters[i]) {
							filteredObject.push(item);
						}

						break;
						case 'price':

						if (item[i].min <= filters[i] && filters[i] <= item[i].max) {
							filteredObject.push(item);
						}

						break;
					}
				}
			});
			console.log('Result', filteredObject);
		}
	}
});
const  Dispatcher = require('../dispatchers/search');

const priceAction = {
	price: (value) => {
		Dispatcher.handleViewAction({
			type: 'filterByPrice',
			value: value,
		});
	},
};

module.exports = priceAction;

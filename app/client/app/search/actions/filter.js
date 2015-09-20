const  Dispatcher = require('../dispatchers/search');

const priceAction = {
	set: (value) => {
		Dispatcher.handleViewAction({
			type: 'filter',
			value: value,
		});
	}
};

module.exports = priceAction;

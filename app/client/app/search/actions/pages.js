const  Dispatcher = require('../dispatchers/search');

const paginationAction = {
	next: (value) => {
		Dispatcher.handleViewAction({
			type: 'next',
			value: value,
		});
	},
	prev: (value) => {
		Dispatcher.handleViewAction({
			type: 'prev',
			value: value,
		});
	}
};

module.exports = paginationAction;

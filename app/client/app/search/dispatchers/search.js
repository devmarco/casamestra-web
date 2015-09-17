const Dispatcher = require('flux').Dispatcher;
const assign     = require('object-assign');

const searchDispatcher = assign(new Dispatcher(), {
	handleServerAction: function(action) {
		this.dispatch({
			source: 'server',
			action: action,
		});
	},
	handleViewAction: function(action) {
		this.dispatch({
			source: 'view',
			action: action,
		});
	},
});

module.exports = searchDispatcher;

const Dispatcher    = require('../dispatchers/search');
const EventEmitter  = require('events').EventEmitter;
const assign        = require('object-assign');

let paginatedData;

const getDataBasedOnPage = value => {
    paginatedData = value;
}

const pagesStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.off('change', callback);
	},
	get: function() {
		return paginatedData;
	},
});

pagesStore.dispatchToken = Dispatcher.register(function(dispatcherPayload) {
	const actions = {
		next: (payload) => {
            getDataBasedOnPage(payload.action.value);
			pagesStore.emit('change');
		},
        prev: (payload) => {
            getDataBasedOnPage(payload.action.value);
			pagesStore.emit('change');
		}
	};

	actions[dispatcherPayload.action.type] && actions[dispatcherPayload.action.type](dispatcherPayload);
});

module.exports = pagesStore;

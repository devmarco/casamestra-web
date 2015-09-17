/* globals $ */

const Dispatcher    = require('../dispatchers/search');
const EventEmitter  = require('events').EventEmitter;
const assign        = require('object-assign');

const filters = {};

const filterStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.off('change', callback);
	},
	get: function() {
		return filters;
	},
});

filterStore.dispatchToken = Dispatcher.register(function(payload) {
	const actions = {
		filterByPrice: () => {
			filterStore.emit('change');
		},
	};

	actions[payload.action.type] && actions[payload.action.type](payload);
});

module.exports = filterStore;

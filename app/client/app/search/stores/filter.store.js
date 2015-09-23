/* globals $ */

const Dispatcher    = require('../dispatchers/search');
const EventEmitter  = require('events').EventEmitter;
const assign        = require('object-assign');
const Filter 		= require('../services/filter.service');

const filters = {};
let filteredData;

const filterForPrice = (filter, type) => {
	// Set the filter for price property
	filters[type][filter.amount] = filter.value;

	// Delete filter if value is empty
	if (filters[type].max === 0 && filters[type].min === 0) delete filters[type];
};

const filterGeneric = (filter, type) => {
	const index = filters[type].indexOf(filter.value);

	if (index === -1) {
		filters[type].push(filter.value);
	} else {
		filters[type].splice(index, 1);
	}

	if (!filters[type].length) delete filters[type];
};

const setFilter = (filter) => {
	const type = filter.type;

	if (!filters[type] && type !== 'price') filters[type] = [];
	if (!filters[type] && type === 'price') filters[type] = {};

	(filter.amount) ? filterForPrice(filter, type) : filterGeneric(filter, type);

	filteredData = Filter.get(filters);
};

const filterStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.off('change', callback);
	},
	get: function() {
		return filteredData;
	},
});

filterStore.dispatchToken = Dispatcher.register(function(dispatcherPayload) {
	const actions = {
		filter: (payload) => {
			setFilter(payload.action.value);
			filterStore.emit('change');
		},
	};

	actions[dispatcherPayload.action.type] && actions[dispatcherPayload.action.type](dispatcherPayload);
});

module.exports = filterStore;

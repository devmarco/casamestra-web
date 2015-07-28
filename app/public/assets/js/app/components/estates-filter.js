Box.Application.addModule('cmFilter', function(context) {
	'use strict';

	return {

		behaviors: ['item-menu'],

		init: function() {
			console.log('Initialized');
		}
	}
});
Box.Application.addModule('cmFilter', function(context) {
	'use strict';

	return {
		behaviors: ['dropdown'],

		init: function() {
			console.log('Initialized');
		}
	}
});
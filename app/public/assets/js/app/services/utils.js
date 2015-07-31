Box.Application.addService('utils', function(context) {
	'use strict';

	return {
		formatMoney: function(number) {
			return "R$ " + number.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
		}
	};
});
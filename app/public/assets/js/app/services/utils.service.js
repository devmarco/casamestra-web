Box.Application.addService('utils.service', function(context) {
	'use strict';

	var $ 		 = context.getGlobal('jQuery'),
		_storage = context.getService('storage.service');

	return {
		formatMoney: function(number) {
			return "R$ " + number.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
		},
		updateTexts: function(f, pagination) {
			var filters = f || {},
				_this = this;

			function createText(value) {
				var items,
					text = '';

				items = value.sort(function(a, b){return a-b});

				value.forEach(function(value, index) {
					if (index === (value.length -1)) {
						(text !== '') ? text+= ' e '+value+'' : text+= ''+value+'';
					} else {
						(text !== '') ? text+= ','+value+'' : text+= ''+value+'';
					}
				});

				return text;
			}

			(function updateBedrooms() {
				var elBeds 	= $('.js-selected-beds');

				if (!filters['bedrooms']) {
					elBeds.text('Quartos');
				} else {
					elBeds.text(createText(filters['bedrooms'])+' '+'Quartos')
				}
			}());

			(function updatePrice() {
				var elPrice = $('.js-selected-price'),
					formatMin,
					formatMax;


				if (!filters['price']) {
					elPrice.text('Preço');
				} else {

					var min = filters['price'].min || 0,
						max = filters['price'].max || 0,
						str = '';

					formatMin = _this.formatMoney(parseInt(min));
					formatMax = _this.formatMoney(parseInt(max));

					if (min && max) {
						elPrice.text(formatMin+' até '+formatMax);
					} else if (min) {
						elPrice.text('Acima de: '+formatMin);
					} else {
						elPrice.text('Até: '+formatMax);
					}
				}
			}());

			(function updateMore() {
				var elMore 	= $('.js-selected-more'),
					keys = Object.keys(filters),
					count = 0;

				keys.forEach(function(value, index) {
					if (value !== 'bedrooms' && value !== 'price') {
						count++;
					}
				});

				if (count !== 0) {
					elMore.text('('+count+') Mais');
				} else {
					elMore.text('Mais');
				}
			}());

			(function updatePagination() {
				var totalData = _storage.get().data.length,
					pages = {};

				if (pagination) {
					pages = pagination;					
				} else {
					pages.from = 1;
					pages.to = 12;
				}

				$('.js-result-stats').text(''+pages.from+' — '+pages.to+' de '+totalData+' imóveis');
			}());
		}
	}
});
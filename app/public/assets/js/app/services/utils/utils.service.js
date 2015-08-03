Box.Application.addService('utils.service', function(context) {
	'use strict';

	var $ 		= context.getGlobal('jQuery'),
		_cache 	= context.getService('cache.service');

	return {
		formatMoney: function(number) {
			return "R$ " + number.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
		},
		updateTexts: function(config) {
			var filters = config.filters || {};

			function createText(value) {
				var items,
					text = '',
					i = 0;

				items = value.sort(function(a, b){return a-b});

				for (i; i < value.length; i++) {
					if (i === (value.length -1)) {
						(text !== '') ? text+= ' e '+items[i]+'' : text+= ''+items[i]+'';
					} else {
						(text !== '') ? text+= ','+items[i]+'' : text+= ''+items[i]+'';
					}
				}

				return text;
			}

			(function updateBedrooms() {
				var elBeds 	= $('.js-selected-beds');

				if (!filters['bedrooms']) {
					elBeds.text('Quartos');
				} else {
					elBeds.text(createText(filters['bedrooms'])+' '+'Quartos')
				}
			});

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

					formatMin = this.formatMoney(parseInt(min));
					formatMax = this.formatMoney(parseInt(max));

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
					count = 0,
					m = 0;

				for (m; m < keys.length; m++) {
					if (m !== 'bedrooms' && m !== 'price') {
						count++;
					}
				}

				if (count !== 0) {
					elMore.text('('+count+') Mais');
				} else {
					elMore.text('Mais');
				}
			}());

			(function updatePagination() {
				var totalData = _cache.get().length,
					pages = {};

				if (config.pages) {
					pages = config.pages;
				} else {
					pages.from = 1;
					pages.to = 12;
				}

				$('.js-result-stats').text(''+pages.from+' — '+pages.to+' de '+totalData+' imóveis');
			}());
		}
	}
});
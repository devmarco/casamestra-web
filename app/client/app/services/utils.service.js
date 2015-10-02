const utils = {
	price: {
		applyText: function(filters) {
			let formatedMin;
			let formatedMax;
			let text;

			if (!filters.price) {
				text = 'Qual valor você procura?';
			} else {
				const min = filters.price.min || 0;
				const max = filters.price.max || 0;

				if (min) formatedMin = this.formatMoney(parseInt(min, 10));
				if (max) formatedMax = this.formatMoney(parseInt(max, 10));

				if (min && max) {
					text = `${formatedMin} até ${formatedMax}`;
				} else if (min) {
					text = `Acima de: ${formatedMin}`;
				} else if (max) {
					text = `Até: ${formatedMax}`;
				} else {
					text = 'Preço';
				}
			}

			return text;
		},
		formatMoney: function(number) {
			return 'R$ ' + number.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
		},
	},
	bedrooms: {
		applyText: function(filters) {
			let text;

			if (filters.bedrooms) {
				text = `${this.format(filters.bedrooms)} Quartos`;
			} else {
				text = 'Quantos quartos você quer?';
			}

			return text;
		},
		format: function(values) {
			let text = '';

			values.forEach(function(value, index) {
				if (index === (values.length - 1)) {
					(text !== '') ? text += ' e ' + value + '' : text += '' + value + '';
				} else {
					(text !== '') ? text += ',' + value + '' : text += '' + value + '';
				}
			});

			return text;
		},
	},
};

module.exports = utils;

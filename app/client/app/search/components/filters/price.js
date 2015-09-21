const React 		= require('react');
const Filter 		= require('../../actions/filter');
const FilterStore 	= require('../../stores/filter.store');


class Price extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Preço' };
	}
	setMaxPrice(event) {
		Filter.set({
			type: 'price',
			value: event.target.value,
			amount: 'max',
		});

		this.applyText();
	}

	setMinPrice(event) {
		Filter.set({
			type: 'price',
			value: event.target.value,
			amount: 'min',
		});

		this.applyText();
	}

	formatMoney(number) {
		return 'R$ ' + number.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
	}

	applyText() {
		const filters = FilterStore.get().filters;

		let formatedMin;
		let formatedMax;

		if (!filters.price) {
			this.setState({ text: 'Preço' });
		} else {
			const min = filters.price.min || 0;
			const max = filters.price.max || 0;

			if (min) formatedMin = this.formatMoney(parseInt(min, 10));
			if (max) formatedMax = this.formatMoney(parseInt(max, 10));

			if (min && max) {
				this.setState({ text: (formatedMin + ' até ' + formatedMax) });
			} else if (min) {
				this.setState({ text: ('Acima de: ' + formatedMin) });
			} else if (max) {
				this.setState({ text: ('Até: ' + formatedMax) });
			} else {
				this.setState({ text: 'Preço' });
			}
		}
	}

	render() {
		return (
			<div className="o-filter select dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content">{this.state.text}</button>
				<div className="dropdown-content o-filter__price">
					<input type="text" pattern="[-+]?[0-9]*[.,]?[0-9]+"placeholder="Mínimo" onBlur={this.setMinPrice.bind(this)} />
					<input type="text" pattern="[-+]?[0-9]*[.,]?[0-9]+"placeholder="Máximo" onBlur={this.setMaxPrice.bind(this)} />
				</div>
			</div>
		);
	}
}

module.exports = Price;

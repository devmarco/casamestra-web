const React 		= require('react');
const Filter 		= require('../../actions/filter');
const FilterStore 	= require('../../stores/filter.store');
const utils			= require('../../../services/utils.service');


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

	setPreviewText(type, event) {
		let max;
		let min;

		if (type === 'max') {
			max = event.target.value;
			min = event.target.previousElementSibling.value;
		} else {
			min = event.target.value;
			max = event.target.nextElementSibling.value;
		}

		this.applyText({
			price: {
				max: max,
				min: min,
			},
		});
	}

	applyText(previewFilter) {
		const filters = FilterStore.get().filters;
		const text = utils.price.applyText(previewFilter || filters);

		this.setState({ text: text });
	}

	render() {
		return (
			<div className="o-filter select dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content">{this.state.text}</button>
				<div className="dropdown-content o-filter__price">
					<input type="text" pattern="[-+]?[0-9]*[.,]?[0-9]+"placeholder="Mínimo" onChange={this.setPreviewText.bind(this, 'min')} onBlur={this.setMinPrice.bind(this)} />
					<input type="text" pattern="[-+]?[0-9]*[.,]?[0-9]+"placeholder="Máximo" onChange={this.setPreviewText.bind(this, 'max')} onBlur={this.setMaxPrice.bind(this)} />
				</div>
			</div>
		);
	}
}

module.exports = Price;

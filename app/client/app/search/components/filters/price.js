const React 	= require('react');
const Filter 	= require('../../actions/filter');

class Price extends React.Component {
	setMaxPrice(event) {
		Filter.price({
			type: 'price',
			value: event.target.value,
			amount: 'max',
		});
	}

	setMinPrice(event) {
		Filter.price({
			type: 'price',
			value: event.target.value,
			amount: 'min',
		});
	}

	render() {
		return (
			<div className="o-filter select dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content">Preço</button>
				<div className="dropdown-content o-filter__price">
					<input type="text" placeholder="Mínimo" onBlur={this.setMinPrice} />
					<input type="text" placeholder="Máximo" onBlur={this.setMaxPrice} />
				</div>
			</div>
		);
	}
}

module.exports = Price;

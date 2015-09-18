const React 	= require('react');
const Filter 	= require('../../actions/filter');

class Price extends React.Component {
	setFilter(value) {
		Filter.price(value);
	}

	render() {
		return (
			<div className="filter select dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content" onClick={this.setFilter.bind(this, 100)}>Preço</button>
				<div className="dropdown-content filter-price">
					<input type="text" placeholder="Mínimo" data-type="f-price" data-value="min" />
					<input type="text" placeholder="Máximo" data-type="f-price" data-value="max" />
				</div>
			</div>
		);
	}
}

module.exports = Price;

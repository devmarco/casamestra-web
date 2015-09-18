const React 	= require('react');
const Filter 	= require('../../actions/filter');
const $ 		= require('jquery');

class Bedrooms extends React.Component {
	setBedrooms(value, event) {
		$(event.target).toggleClass('active');

		Filter.price({
			type: 'bedrooms',
			value: value,
		});
	}

	render() {
		return (
			<div className="o-filter select dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content">Quartos</button>
				<div className="dropdown-content o-filter__bedrooms">
					<ul>
						<li>
							<button onClick={this.setBedrooms.bind(this, 1)}>1</button>
						</li>
						<li>
							<button onClick={this.setBedrooms.bind(this, 2)}>2</button>
						</li>
						<li>
							<button onClick={this.setBedrooms.bind(this, 3)}>3</button>
						</li>
						<li>
							<button onClick={this.setBedrooms.bind(this, 4)}>4</button>
						</li>
						<li>
							<button onClick={this.setBedrooms.bind(this, 5)}>5+</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

module.exports = Bedrooms;

const React 		= require('react');
const Filter 		= require('../../actions/filter');
const FilterStore 	= require('../../stores/filter.store');
const $ 			= require('jquery');
const utils			= require('../../../services/utils.service');

class Bedrooms extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Quantos quartos você quer?' };
	}

	setBedrooms(value, event) {
		$(event.target).toggleClass('active');

		Filter.set({
			type: 'bedrooms',
			value: value,
		});

		this.applyTexts();
	}

	applyTexts() {
		const filters = FilterStore.get().filters;
		const text = utils.bedrooms.applyText(filters);

		this.setState({ text: text });
	}

	render() {
		return (
			<div className="o-filter select dropdown">
				<span className="title">Quartos</span>
				<span className="title--result">{this.state.text}</span>
				<div className="o-filter__bedrooms">
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

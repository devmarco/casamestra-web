const React 		= require('react');
const Filter 		= require('../../actions/filter');
const FilterStore 	= require('../../stores/filter.store');
const $ 			= require('jquery');

class Bedrooms extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Quartos' };
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
		let text;

		if (filters.bedrooms) {
			text = `${this.formatText(filters.bedrooms)} Quartos`;
		} else {
			text = 'Quartos';
		}

		this.setState({ text: text });
	}

	formatText(values) {
		let text = '';

		values.forEach(function(value, index) {
			if (index === (values.length - 1)) {
				(text !== '') ? text += ' e ' + value + '' : text += '' + value + '';
			} else {
				(text !== '') ? text += ',' + value + '' : text += '' + value + '';
			}
		});

		return text;
	}

	render() {
		return (
			<div className="o-filter select dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content">{this.state.text}</button>
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

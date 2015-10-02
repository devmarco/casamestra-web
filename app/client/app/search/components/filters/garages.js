const React = require('react');
const $ 	= require('jquery');

class Garages extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Quantos automóveis' };
	}

	setGarages(value, event) {
		$(event.target).toggleClass('active');

		// Filter.set({
		// 	type: 'bedrooms',
		// 	value: value,
		// });
		//
		// this.applyTexts();
	}

	render() {
		return (
			<div className="o-filter">
				<span className="title">Garagens</span>
				<span className="title--result">{this.state.text}</span>
				<div className="o-filter__bathrooms">
					<ul>
						<li>
							<button onClick={this.setGarages.bind(this, 1)}>1</button>
						</li>
						<li>
							<button onClick={this.setGarages.bind(this, 2)}>2</button>
						</li>
						<li>
							<button onClick={this.setGarages.bind(this, 3)}>3</button>
						</li>
						<li>
							<button onClick={this.setGarages.bind(this, 4)}>4</button>
						</li>
						<li>
							<button onClick={this.setGarages.bind(this, 5)}>5+</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

module.exports = Garages;

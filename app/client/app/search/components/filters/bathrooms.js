const React = require('react');
const $ 	= require('jquery');

class Bathrooms extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Quantos banheiros?' };
	}

	setBathrooms(value, event) {
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
				<span className="title">Banheiros</span>
				<span className="title--result">{this.state.text}</span>
				<div className="o-filter__bathrooms">
					<ul>
						<li>
							<button onClick={this.setBathrooms.bind(this, 1)}>1</button>
						</li>
						<li>
							<button onClick={this.setBathrooms.bind(this, 2)}>2</button>
						</li>
						<li>
							<button onClick={this.setBathrooms.bind(this, 3)}>3</button>
						</li>
						<li>
							<button onClick={this.setBathrooms.bind(this, 4)}>4</button>
						</li>
						<li>
							<button onClick={this.setBathrooms.bind(this, 5)}>5+</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

module.exports = Bathrooms;

const React = require('react');

class Animals extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Posso ter um animal?' };
	}

	render() {
		return (
			<div className="o-filter">
				<span className="title">Animais</span>
				<span className="title--result">{this.state.text}</span>
				<div className="o-filter__check">
					<ul className="check-list">
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Churrasqueira</label>
						</li>
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Churrasqueira</label>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

module.exports = Animals;

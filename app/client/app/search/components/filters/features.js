const React = require('react');

class Features extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'O que você procura?' };
	}

	render() {
		return (
			<div className="o-filter">
				<span className="title">Características</span>
				<span className="title--result">{this.state.text}</span>
				<div className="o-filter__check">
					<ul className="check-list">
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Churrasqueira</label>
						</li>
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Piscina</label>
						</li>
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Area de Lazer</label>
						</li>
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Hidromassagem</label>
						</li>
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Churrasqueira</label>
						</li>
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Piscina</label>
						</li>
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Area de Lazer</label>
						</li>
						<li>
							<input type="checkbox" id="a" />
							<label htmlFor="a">Hidromassagem</label>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

module.exports = Features;

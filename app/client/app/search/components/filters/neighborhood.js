const React = require('react');

class Neighborhood extends React.Component {
	render() {
		return (
			<div className="o-filter">
				<input type="text" placeholder="Selecione a vizinhança" />
			</div>
		);
	}
}

module.exports = Neighborhood;

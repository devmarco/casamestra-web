const React = require('react');

class Ordering extends React.Component {
	render() {
		return (
			<div className="o-filter select">
				<div className="select-button">
					<select>
						<option>Filtrar por data</option>
						<option>Filtrar por preço - Menor para Maior</option>
						<option>Filtrar por preço - Maior para Menor</option>
					</select>
				</div>
			</div>
		);
	}
}

module.exports = Ordering;

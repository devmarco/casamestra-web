const React = require('react');

class Bedrooms extends React.Component {
	render() {
		return (
			<div className="filter select dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content">Quartos</button>
				<div className="dropdown-content filter-bedrooms">
					<ul>
						<li>
							<button data-type="f-bedrooms" data-value="1">1</button>
						</li>
						<li>
							<button data-type="f-bedrooms" data-value="2">2</button>
						</li>
						<li>
							<button data-type="f-bedrooms" data-value="3">3</button>
						</li>
						<li>
							<button data-type="f-bedrooms" data-value="4">4</button>
						</li>
						<li>
							<button data-type="f-bedrooms" data-value="5">5+</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

module.exports = Bedrooms;

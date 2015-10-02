const React 		= require('react');
const Price 		= require('./price');
const Bedrooms 		= require('./bedrooms');
const Features 		= require('./features');
const Bathrooms 	= require('./bathrooms');
const BuildingType 	= require('./building-type');
const Garages 		= require('./garages');
const Animals 		= require('./animals');
const Neighborhood 	= require('./neighborhood');

class Filters extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="c-search__filter">
				<div className="c-search__filter__item">
					<div className="o-filter__content">
						<div className="o-filter__column">
							<div className="o-filter__column__bx">
								<Neighborhood />
							</div>
							<div className="o-filter__column__bx">
								<Bedrooms />
							</div>
							<div className="o-filter__column__bx">
								<Price />
							</div>
							<div className="o-filter__column__bx">
								<BuildingType />
							</div>
						</div>
						<div className="o-filter__column">
							<div className="o-filter__column__bx">
								<Features />
							</div>
							<div className="o-filter__column__bx">
								<Garages />
							</div>
							<div className="o-filter__column__bx">
								<Bathrooms />
							</div>
							<div className="o-filter__column__bx">
								<Animals />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Filters;

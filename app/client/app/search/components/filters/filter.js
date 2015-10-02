const React 		= require('react');
const More 			= require('./more');
const Price 		= require('./price');
const Bedrooms 		= require('./bedrooms');
const Neighborhood 	= require('./neighborhood');
const $ 			= require('jquery');

class Filters extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="c-search__filter">
				<div className="c-search__filter__item">
					<Neighborhood />
					<Bedrooms />
					<Price />
					<More />
				</div>
			</div>
		);
	}
}

module.exports = Filters;

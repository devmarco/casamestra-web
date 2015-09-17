const React 		= require('react');
const More 			= require('./more');
const Price 		= require('./price');
const Bedrooms 		= require('./bedrooms');
const Neighborhood 	= require('./neighborhood');
const $ 			= require('jquery');

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			e: this.props.data,
		};
	}

	selectView() {
		$('main').toggleClass('list-active');
	}

	render() {
		return (
			<div className="c-search__filter">
				<Neighborhood />
				<Bedrooms />
				<Price />
				<More />
				<div className="filter right">
					<button className="map-icon" onClick={this.selectView}></button>
				</div>
				<div className="filter right">
					<button className="list-icon" onClick={this.selectView}></button>
				</div>
			</div>
		);
	}
}

Filters.propTypes = {
	data: React.PropTypes.object.isRequired,
};

module.exports = Filters;

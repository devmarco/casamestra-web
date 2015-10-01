const React 		= require('react');
const More 			= require('./more');
const Price 		= require('./price');
const Bedrooms 		= require('./bedrooms');
const Neighborhood 	= require('./neighborhood');
const Alert 		= require('./alert');
const $ 			= require('jquery');

class Filters extends React.Component {
	constructor(props) {
		super(props);
	}

	redraw() {
		window.mapList.invalidateSize();
		window.mapBig.invalidateSize();
	}

	selectView() {
		$('.c-search__content').toggleClass('list-active');
		this.redraw();
	}

	render() {
		return (
			<div className="c-search__filter">
				<div className="c-search__filter__item">
					<Neighborhood />
					<Bedrooms />
					<Price />
					<More />
					<div className="o-filter o-filter--right">
						<button className="map-icon" onClick={this.selectView.bind(this)}></button>
					</div>
					<div className="o-filter o-filter--right">
						<button className="list-icon" onClick={this.selectView.bind(this)}></button>
					</div>
					<Alert />
				</div>
			</div>
		);
	}
}

module.exports = Filters;

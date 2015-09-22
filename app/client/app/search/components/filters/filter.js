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

	componentDidMount() {
		const element = React.findDOMNode(this);
		window.onscroll = (e) => {
			if (e.target.scrollingElement.scrollTop >= 100) {
				$(element).addClass('scroll-active');
			} else {
				$(element).removeClass('scroll-active');
			}
		};
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
				<Neighborhood />
				<Bedrooms />
				<Price />
				<More />
				<div className="o-filter right">
					<button className="map-icon" onClick={this.selectView.bind(this)}></button>
				</div>
				<div className="o-filter right">
					<button className="list-icon" onClick={this.selectView.bind(this)}></button>
				</div>
			</div>
		);
	}
}

module.exports = Filters;

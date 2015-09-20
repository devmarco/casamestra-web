const React 	= require('react');
const Filter 	= require('./filters/filter');
const MapBig 	= require('./map/map-big');
const List 		= require('./list/list');

class Search extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="c-search__content">
				<Filter />
				<MapBig data={this.props.data} />
				<List data={this.props.data} />
			</div>
		);
	}
}

Search.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = Search;

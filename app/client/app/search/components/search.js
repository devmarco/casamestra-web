const React 	= require('react');
const Filter 	= require('./filters/filter');
const MapBig 	= require('./map/map-big');
const List 		= require('./list/list');
const _ 		= require('lodash');

class Search extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="c-search__content">
				<Filter />
				<MapBig data={this.props.data} />
				<List data={_.slice(this.props.data, 0, 12)} />
			</div>
		);
	}
}

Search.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = Search;

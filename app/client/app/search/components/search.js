const React 	= require('react');
const Filter 	= require('./filters/filter');
const MapBig 	= require('./map/map-big');
const List 		= require('./list/list');
const storage	= require('../services/storage.service');
const $ 		= require('jquery');

class Search extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// const option = storage.view.get();
		// if (option === 'list') $('.c-search__content').toggleClass('list-active');
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

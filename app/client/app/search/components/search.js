const React 		= require('react');
const Filter 		= require('./filters/filter');
const MapBig 		= require('./map/map-big');
const List 			= require('./list/list');
const FilterStore 	= require('../stores/filter.store');


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
		};
	}

	componentWillMount() {
		FilterStore.addChangeListener(this.onFilterChange.bind(this));
	}

	onFilterChange() {
		this.setState({
			data: FilterStore.get().data,
		});
	}

	render() {
		return (
			<div className="c-search__content">
				<Filter />
				<MapBig data={this.state.data} />
				<List data={this.state.data} />
			</div>
		);
	}
}

Search.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = Search;

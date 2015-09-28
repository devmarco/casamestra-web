const React 		= require('react');
const ListEstates 	= require('./list-estates');
const MapSmall 		= require('./map-small');
const PagesStore 	= require('../../stores/pages.store');
const FilterStore 	= require('../../stores/filter.store');
const _ 			= require('lodash');

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: _.slice(this.props.data, 0, 12),
			size: this.props.data.length,
			next: 12,
			prev: 1,
		};
	}

	componentWillMount() {
		PagesStore.addChangeListener(this.onPageChange.bind(this));
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			data: _.slice(newProps.data, 0, 12),
			size: newProps.data.length,
		});
	}

	onPageChange() {
		const pagesData = PagesStore.get();
		const filterData = FilterStore.get().data;

		this.setState({
			data: pagesData.data,
			size: filterData.length,
			next: (pagesData.next > filterData.length) ? filterData.length : pagesData.next,
			prev: (pagesData.prev > 0) ? pagesData.prev : 1,
		});
	}

	render() {
		return (
			<div className="c-search__list">
				<ListEstates data={this.state.data} size={this.state.size} next={this.state.next} prev={this.state.prev} />
				<MapSmall data={this.state.data} />
			</div>
		);
	}
}

List.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = List;

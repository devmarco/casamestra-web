const React 		= require('react');
const Filter 		= require('./filters/filter');
const MapBig 		= require('./map/map-big');
const List 			= require('./list/list');
const Pagination	= require('./list/pagination');
const Alert 		= require('./filters/alert');
const FilterStore 	= require('../stores/filter.store');
const PagesStore 	= require('../stores/pages.store');
const $ 			= require('jquery');

let delay;

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			size: this.props.data.length,
			next: 12,
			prev: 1,
		};
	}

	componentWillMount() {
		FilterStore.addChangeListener(this.onFilterChange.bind(this));
		PagesStore.addChangeListener(this.onPageChange.bind(this));
	}

	onFilterChange() {
		this.setState({
			data: FilterStore.get().data,
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

	showFilter() {
		const element = React.findDOMNode(this);

		$(element).toggleClass('active');
	}

	selectView() {
		$('.c-search__content').toggleClass('list-active');
		this.redraw();
	}

	redraw() {
		window.mapList.invalidateSize();
		window.mapBig.invalidateSize();
	}

	render() {
		return (
			<div className="c-search__content">
				<div className="c-search__content__filter">
					<button className="o-filter-button" onClick={this.showFilter.bind(this)}>
						<span data-letters="Filtrar">Filtrar</span>
					</button>
				</div>
				<div className="c-search__content__view">
					<div className="o-view">
						<button className="map-icon" onClick={this.selectView.bind(this)}></button>
					</div>
					<div className="o-view">
						<button className="list-icon" onClick={this.selectView.bind(this)}></button>
					</div>
					<Alert />
					<Pagination size={this.state.size} next={this.state.next} prev={this.state.prev} />
				</div>
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

const React 		= require('react');
const FilterStore 	= require('../../stores/filter.store');
const PagesStore 	= require('../../stores/pages.store');
const Pages 		= require('../../actions/pages');
const storage		= require('../../services/storage.service');
const _ 			= require('lodash');

class Pagination extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			size: 0,
			next: 12,
			prev: 1,
		};

		this.nextPage = 0;
		this.prevPage = 0;
	}

	componentWillMount() {
		FilterStore.addChangeListener(this.onFilterChange.bind(this));
		PagesStore.addChangeListener(this.onPageChange.bind(this));
	}

	componentDidMount() {
		this.setState({size: storage.get().data.length});
	}

	componentWillUnmount() {
		FilterStore.removeChangeListener(this.onFilterChange.bind(this));
		PagesStore.removeChangeListener(this.onPageChange.bind(this));
	}

	onPageChange() {
		const pagesData = PagesStore.get();
		const filterData = FilterStore.get().data;

		this.setState({
			size: filterData.length,
			next: (pagesData.next > filterData.length) ? filterData.length : pagesData.next,
			prev: (pagesData.prev > 0) ? pagesData.prev : 1,
		});
	}

	onFilterChange() {
		const data = FilterStore.get().data;

		this.setState({
			size: data.length,
			next: 12,
			prev: 1,
		});
	}

	next() {
		const data = storage.get().data;

		if ((this.nextPage + 12) > data.length) return;

		this.nextPage = this.nextPage + 12;

		Pages.next({
			data: _.slice(data, (this.nextPage), (this.nextPage + 12)),
			next: (this.nextPage + 12),
			prev: (this.nextPage),
		});
	}

	prev() {
		const data = storage.get().data;

		if (this.nextPage === 0) return;

		this.nextPage = this.nextPage - 12;
		this.prevPage = this.nextPage;

		Pages.prev({
			data: _.slice(data, (this.prevPage), (this.nextPage + 12)),
			next: (this.nextPage + 12),
			prev: (this.prevPage),
		});
	}

	render() {
		return (
			<div className="o-filter pagination pagination--text">
				<div className="pagination__titles">{this.state.prev} — {this.state.next} de {this.state.size} imóveis</div>
				<div className="pagination__buttons">
					<button className="prev" onClick={this.prev.bind(this)}></button>
					<button className="next" onClick={this.next.bind(this)}></button>
				</div>
			</div>
		);
	}
}

Pagination.propType = {
	size: React.PropTypes.array.isRequired,
};

module.exports = Pagination;

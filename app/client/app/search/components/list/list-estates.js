const React 		= require('react');
const Estate		= require('./estate');
const Ordering		= require('./order');
const Pagination	= require('./pagination');
const FilterStore 	= require('../../stores/filter.store');
const PagesStore 	= require('../../stores/pages.store');
const _ 			= require('lodash');

class EstatesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: _.slice(this.props.data, 0, 12),
		};
	}

	componentWillMount() {
		FilterStore.addChangeListener(this.onFilterChange.bind(this));
		PagesStore.addChangeListener(this.onPageChange.bind(this));
	}

	componentWillUnmount() {
		FilterStore.removeChangeListener(this.onFilterChange.bind(this));
		PagesStore.removeChangeListener(this.onPageChange.bind(this));
	}

	onPageChange() {
		const data = PagesStore.get().data;

		this.setState({
			data: data,
		});
	}

	onFilterChange() {
		const data = FilterStore.get().data;

		this.setState({
			data: _.slice(data, 0, 12),
		});
	}

	render() {
		return (
			<div className="c-search__list__list">
				<div className="filter__container">
					<Ordering />
					<Pagination />
				</div>
				<div className="list__container">
					{this.state.data.map(e => {
						return <Estate key={e.ecmid} data={e} />;
					})}
				</div>
				<div className="filter__container">
					<Ordering />
					<Pagination />
				</div>
			</div>
		);
	}
}

EstatesList.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = EstatesList;

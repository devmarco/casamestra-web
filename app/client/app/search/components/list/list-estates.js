const React 		= require('react');
const Estate		= require('./estate');
const Ordering		= require('./order');
const Pagination	= require('./pagination');


class EstatesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
		};
	}

	render() {
		const estates = this.state.data.map(e => <Estate data={e} />);

		return (
			<div className="c-search__list__list">
				<div className="filter__container">
					<Ordering />
					<Pagination />
				</div>
				<div className="list__container">
					{ estates }
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

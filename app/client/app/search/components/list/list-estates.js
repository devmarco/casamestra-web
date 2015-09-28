const React 		= require('react');
const Estate		= require('./estate');
const Ordering		= require('./order');
const Pagination	= require('./pagination');

class EstatesList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,
			size: this.props.size,
			next: this.props.next,
			prev: this.props.prev,
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			data: newProps.data,
			size: newProps.size,
			next: newProps.next,
			prev: newProps.prev,
		});
	}

	render() {
		return (
			<div className="c-search__list__list">
				<div className="filter__container">
					<Ordering />
					<Pagination size={this.state.size} next={this.state.next} prev={this.state.prev} />
				</div>
				<div className="list__container">
					{this.state.data.map(e => <Estate key={e.ecmid} data={e} />)};
				</div>
				<div className="filter__container">
					<Ordering />
					<Pagination size={this.state.size} next={this.state.next} prev={this.state.prev} />
				</div>
			</div>
		);
	}
}

EstatesList.propTypes = {
	data: React.PropTypes.array.isRequired,
	size: React.PropTypes.number.isRequired,
	next: React.PropTypes.number.isRequired,
	prev: React.PropTypes.number.isRequired,
};

module.exports = EstatesList;

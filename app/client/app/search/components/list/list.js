const React 		= require('react');
const ListEstates 	= require('./list-estates');
const MapSmall 		= require('./map-small');
const FilterStore 	= require('../../stores/filter.store');
const _ 			= require('lodash');

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: _.slice(this.props.data, 0, 12),
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			data: _.slice(newProps.data, 0, 12),
		});
	}

	render() {
		return (
			<div className="c-search__list">
				<ListEstates data={this.state.data} />
				<MapSmall data={this.state.data} />
			</div>
		);
	}
}

List.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = List;

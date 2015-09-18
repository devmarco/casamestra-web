const React 		= require('react');
const ListEstates 	= require('./list-estates');
const MapSmall 		= require('./map-small');

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="c-search__list">
				<ListEstates data={this.props.data} />
				<MapSmall data={this.props.data} />
			</div>
		);
	}
}

List.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = List;

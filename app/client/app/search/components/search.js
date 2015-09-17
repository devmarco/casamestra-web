const React 	= require('react');
const MapBig 	= require('./map-big');

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			estate: props.data,
		}
	}

	render() {
		return (
			<div className="content">
				<MapBig data={this.state.estate} />
				<div className="estates__bx__list">
					<div className="estates__bx__list__container">
						<div className="filter__container">
						</div>
						<div className="list__container render-area">
						</div>
						<div className="filter__container">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Search.propTypes = {
// 	data: React.PropTypes.array.isRequired,
// };

module.exports = Search;

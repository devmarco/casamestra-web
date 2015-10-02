const React 		= require('react');
const Estate		= require('./estate');

class EstatesList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			data: newProps.data,
		});
	}

	render() {
		return (
			<div className="c-search__list__list">
				<div className="list__container">
					{this.state.data.map(e => <Estate key={e.ecmid} data={e} />)};
				</div>
			</div>
		);
	}
}

EstatesList.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = EstatesList;

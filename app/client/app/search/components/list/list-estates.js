import React from 'react';
import Estate from './estate';

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
			<div>
				{ estates }
			</div>
		);
	}
}

EstatesList.propTypes = {
	data: React.PropTypes.array.isRequired,
};

export { EstatesList };

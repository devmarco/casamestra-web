const React = require('react');

class Modal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { closeModal } = this.props;

		return (
			<div className="o-modal o-modal--show">
				<div className="o-modal__content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

module.exports = Modal;

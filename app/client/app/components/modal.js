const React = require('react');

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			show: this.props.show,
		};
	}

	componentWillReceiveProps(prop) {
		this.setState({
			show: prop.show,
		});
	}

	render() {
		const show = (this.state.show) ? 'o-modal--show' : null;

		return (
			<div className={show + ' o-modal'}>
			<div className="o-modal__content">
				<div className="o-modal__content__area">
					{this.props.children}
				</div>
			</div>
			</div>
		);
	}
}

module.exports = Modal;

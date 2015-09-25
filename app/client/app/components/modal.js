const React = require('react/addons');

class Modal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const cx = React.addons.classSet;

		const classes = cx({
			'o-modal': true,
			'o-modal--show': true,
		});

		return (
			<div className={classes}>
				<div className="o-modal__content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

module.exports = Modal;

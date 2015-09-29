const React = require('react');

class Portal extends React.Component {
	componentDidMount() {
		let p = this.props.id && document.getElementById(this.props.id);

		if (!p) {
			p = document.createElement('div');

			p.id = this.props.id;

			document.body.appendChild(p);
		}

		this.portalElement = p;
		this.componentDidUpdate();
	}

	componentDidUpdate() {
		React.render(<div {...this.props}>{this.props.children}</div>, this.portalElement);
	}

	componentWillUnmount() {
		document.body.removeChild(this.portalElement);
	}

	render() { return null; }
}

module.exports = Portal;

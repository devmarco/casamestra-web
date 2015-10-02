const React 		= require('react');
const Pages 		= require('../../actions/pages');
const storage		= require('../../services/storage.service');
const _ 			= require('lodash');

class Pagination extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			size: this.props.size,
			next: this.props.next,
			prev: this.props.prev,
		};

		this.nextPage = 0;
		this.prevPage = 0;
	}

	componentDidMount() {
		this.setState({size: storage.get().data.length});
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			size: newProps.size,
			next: newProps.next,
			prev: newProps.prev,
		});
	}

	next() {
		const data = storage.get().data;

		if ((this.nextPage + 12) > data.length) return;

		this.nextPage = this.nextPage + 12;

		Pages.next({
			data: _.slice(data, (this.nextPage), (this.nextPage + 12)),
			next: (this.nextPage + 12),
			prev: (this.nextPage),
		});
	}

	prev() {
		const data = storage.get().data;

		if (this.nextPage === 0) return;

		this.nextPage = this.nextPage - 12;
		this.prevPage = this.nextPage;

		Pages.prev({
			data: _.slice(data, (this.prevPage), (this.nextPage + 12)),
			next: (this.nextPage + 12),
			prev: (this.prevPage),
		});
	}

	render() {
		return (
			<div className="o-pagination o-pagination--text">
				<div className="o-pagination__titles">{this.state.prev} — {this.state.next} de {this.state.size} imóveis</div>
				<div className="o-pagination__buttons">
					<button className="prev" onClick={this.prev.bind(this)}></button>
					<button className="next" onClick={this.next.bind(this)}></button>
				</div>
			</div>
		);
	}
}

Pagination.propType = {
	data: React.PropTypes.array.isRequired,
	size: React.PropTypes.number.isRequired,
	next: React.PropTypes.number.isRequired,
	prev: React.PropTypes.number.isRequired,
};

module.exports = Pagination;

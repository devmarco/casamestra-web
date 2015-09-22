const React 	= require('react');
const storage 	= require('../../services/storage.service');
const _ 		= require('lodash');

class Ordering extends React.Component {

	onChange() {
		const data = storage.get().data;
		let values;

		// Low to Higher
		//values = _.map(_.sortByOrder(data, 'price', 'asc'), _.values);

		// Higher to low
		//values = _.map(_.sortByAll(data, 'price', 'desc'), _.values);
	}

	render() {
		return (
			<div className="o-filter select">
				<div className="select-button">
					<select onChange={this.onChange.bind(this)}>
						<option>Filtrar por data</option>
						<option>Filtrar por preço - Menor para Maior</option>
						<option>Filtrar por preço - Maior para Menor</option>
					</select>
				</div>
			</div>
		);
	}
}

module.exports = Ordering;

const React 	= require('react');
const storage 	= require('../../services/storage.service');
const _ 		= require('lodash');

class Ordering extends React.Component {

	onChange(e) {
		const data = storage.get().data;
		const value = e.target.value;

		// switch (value) {
		// 	case 2:
		//
		// 		break;
		// 	case 3:
		//
		// 		break;
		// 	case 4:
		//
		// 		break;
		// 	default
		// }
	}

	byDate(data) {
		return _.map(_.sortByOrder(data, 'createdAt', 'asc'), estate => estate);
	}

	lowToHigh(data) {
		return _.map(_.sortByOrder(data, 'price', 'asc'), estate => estate);
	}

	highToLow(data) {
		return _.map(_.sortByOrder(data, 'price', 'desc'), estate => estate);
	}

	render() {
		return (
			<div className="o-filter select">
				<div className="select-button">
					<select value="1" onChange={this.onChange.bind(this)}>
						<option value="1">Ordenar por:</option>
						<option value="2">Filtrar por data</option>
						<option value="3">Filtrar por preço - Menor para Maior</option>
						<option value="4">Filtrar por preço - Maior para Menor</option>
					</select>
				</div>
			</div>
		);
	}
}

module.exports = Ordering;

const React         = require('react');
const FilterStore   = require('../../stores/filter.store');
const utils			= require('../../../services/utils.service');

class Alert extends React.Component {
	constructor() {
		super();

		this.state = {
			onHover: 'none',
			bedrooms: 'Sem opção de quartos',
			price: 'Qualquer valor',
			more: 'Sem filtro'
		};
	}

	componentWillMount() {
		FilterStore.addChangeListener(this.onFilterChange.bind(this));
	}

	componentWillUnmount() {
		FilterStore.removeChangeListener(this.onFilterChange);
	}

	onFilterChange() {
		const filters = FilterStore.get().filters;
		const priceText = utils.price.applyText(filters);
		const bedroomsText = utils.bedrooms.applyText(filters);
		const myFilters = {};

		(priceText === 'Preço') ? myFilters.price = 'Qualquer valor' : myFilters.price = priceText;
		(bedroomsText === 'Quartos') ? myFilters.bedrooms = 'Sem opção de quartos' : myFilters.bedrooms = bedroomsText;

		this.setState(myFilters);
	}

	render() {
		return (
			<div className="o-alert dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content">Criar Alerta</button>
				<p style={{display: this.state.onHover}}>Crie um alerta, que iremos notifica-lo quando novos imóveis que atende aos seus critérios forem adicionados</p>
				<div className="dropdown-content o-alert__content">
					<span className="title">Alerta para:</span>
					<span className="neighborhoods">Savassi ou Funcionarios</span>
					<ul>
						<li>Quartos: <b>{this.state.bedrooms}</b></li>
						<li>Preço: <b>{this.state.price}</b></li>
						<li>Mais: <b>{this.state.more}</b></li>
					</ul>
					<div className="o-alert__action">
						<button className="o-btn o-btn--green">Criar Alerta</button>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Alert;

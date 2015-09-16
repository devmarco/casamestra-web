import React from 'react';

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			e: this.props.data,
		};
	}

	render() {
		return (
			<div className="estates__bx__filter">
				<div className="filter">
					<input type="text" placeholder="Selecione a vizinhança" />
				</div>
				<div className="filter select dropdown">
					<button data-type="dropdown" dropdown-content=".dropdown-content" className="js-selected-beds">Quartos</button>
					<div className="dropdown-content filter-bedrooms">
						<ul>
							<li>
								<button data-type="f-bedrooms" data-value="1">1</button>
							</li>
							<li>
								<button data-type="f-bedrooms" data-value="2">2</button>
							</li>
							<li>
								<button data-type="f-bedrooms" data-value="3">3</button>
							</li>
							<li>
								<button data-type="f-bedrooms" data-value="4">4</button>
							</li>
							<li>
								<button data-type="f-bedrooms" data-value="5">5+</button>
							</li>
						</ul>
					</div>
				</div>
				<div className="filter select dropdown">
					<button data-type="dropdown" dropdown-content=".dropdown-content" className="js-selected-price">Preço</button>
					<div className="dropdown-content filter-price">
						<input type="text" placeholder="Mínimo" data-type="f-price" data-value="min" />
						<input type="text" placeholder="Máximo" data-type="f-price" data-value="max" />
					</div>
				</div>
				<div className="filter select dropdown">
					<button data-type="dropdown" dropdown-content=".dropdown-content" className="js-selected-more">Mais</button>
					<div className="dropdown-content filter-more">
						<div className="filter__column">
							<div className="filter__column__bx">
								<span className="title">Tipo do Imóvel</span>
								<ul className="check-list">
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Casa</label>
									</li>
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Apartamento</label>
									</li>
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Lote</label>
									</li>
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Sítio</label>
									</li>
								</ul>
							</div>
							<div className="filter__column__bx">
								<span className="title">Banheiros</span>
								<div className="filter-bedrooms">
									<ul>
										<li>
											<button data-type="f-bathrooms" data-value="1">1</button>
										</li>
										<li>
											<button data-type="f-bathrooms" data-value="2">2</button>
										</li>
										<li>
											<button data-type="f-bathrooms" data-value="3">3</button>
										</li>
										<li>
											<button data-type="f-bathrooms" data-value="4">4</button>
										</li>
										<li>
											<button data-type="f-bathrooms" data-value="5">5+</button>
										</li>
									</ul>
								</div>
							</div>
							<div className="filter__column__bx">
								<span className="title">Garagens</span>
								<div className="filter-bedrooms">
									<ul>
										<li>
											<button data-type="f-garages" data-value="1">1</button>
										</li>
										<li>
											<button data-type="f-garages" data-value="2">2</button>
										</li>
										<li>
											<button data-type="f-garages" data-value="3">3</button>
										</li>
										<li>
											<button data-type="f-garages" data-value="4">4</button>
										</li>
										<li>
											<button data-type="f-garages" data-value="5">5+</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="filter__column">
							<div className="filter__column__bx">
								<span className="title">Características</span>
								<ul className="check-list">
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Churrasqueira</label>
									</li>
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Piscina</label>
									</li>
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Area de Lazer</label>
									</li>
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Hidromassagem</label>
									</li>
								</ul>
							</div>
							<div className="filter__column__bx">
								<span className="title">Animais</span>
								<ul className="check-list">
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Cachorro</label>
									</li>
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Gatos</label>
									</li>
								</ul>
							</div>
							<div className="filter__column__bx">
								<span className="title">Banheiros</span>
								<ul className="check-list">
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Churrasqueira</label>
									</li>
									<li>
										<input type="checkbox" id="a" />
										<label htmlFor="a">Churrasqueira</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="filter right">
					<button data-type="f-map" className="map-icon"></button>
				</div>
				<div className="filter right">
					<button data-type="f-list" className="list-icon"></button>
				</div>
			</div>
		);
	}
}

Filters.propTypes = {
	data: React.PropTypes.object.isRequired,
};

export { Filters };

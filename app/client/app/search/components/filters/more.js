const React = require('react');

class More extends React.Component {

	setBathrooms(value, event) {

	}

	setGarages(value, event) {

	}

	render() {
		return (
			<div className="o-filter select dropdown">
				<button data-type="dropdown" data-dropdown-content=".dropdown-content">Mais</button>
				<div className="dropdown-content o-filter__more">
					<div className="o-filter__column">
						<div className="o-filter__column__bx">
							<span className="title">Tipo do Imóvel</span>
							<ul className="check-list">
								<li>
									<input type="checkbox" id="casa" />
									<label htmlFor="casa">Casa</label>
								</li>
								<li>
									<input type="checkbox" id="casa-condominio" />
									<label htmlFor="casa-condominio">Casa em Condomínio</label>
								</li>
								<li>
									<input type="checkbox" id="apartamento" />
									<label htmlFor="apartamento">Apartamento</label>
								</li>
								<li>
									<input type="checkbox" id="cobertura" />
									<label htmlFor="cobertura">Cobertura</label>
								</li>
								<li>
									<input type="checkbox" id="andar-corrido" />
									<label htmlFor="andar-corrido">Andar Corrido</label>
								</li>
								<li>
									<input type="checkbox" id="apart-hotel" />
									<label htmlFor="apart-hotel">Apart Hotel</label>
								</li>
								<li>
									<input type="checkbox" id="galpao" />
									<label htmlFor="galpao">Galpão</label>
								</li>
								<li>
									<input type="checkbox" id="loja" />
									<label htmlFor="loja">Loja</label>
								</li>
								<li>
									<input type="checkbox" id="lote" />
									<label htmlFor="lote">Lote</label>
								</li>
								<li>
									<input type="checkbox" id="lote-condominio" />
									<label htmlFor="lote-condominio">Lote em Condomínio</label>
								</li>
								<li>
									<input type="checkbox" id="predio" />
									<label htmlFor="predio">Predio</label>
								</li>
								<li>
									<input type="checkbox" id="sala" />
									<label htmlFor="sala">Sala</label>
								</li>
								<li>
									<input type="checkbox" id="vaga-garagem" />
									<label htmlFor="vaga-garagem">Vaga de Garagem</label>
								</li>
							</ul>
						</div>
						<div className="o-filter__column__bx">
							<span className="title">Banheiros</span>
							<div className="o-filter__bathrooms">
								<ul>
									<li>
										<button onClick={this.setBathrooms.bind(this, 1)}>1</button>
									</li>
									<li>
										<button onClick={this.setBathrooms.bind(this, 2)}>2</button>
									</li>
									<li>
										<button onClick={this.setBathrooms.bind(this, 3)}>3</button>
									</li>
									<li>
										<button onClick={this.setBathrooms.bind(this, 4)}>4</button>
									</li>
									<li>
										<button onClick={this.setBathrooms.bind(this, 5)}>5+</button>
									</li>
								</ul>
							</div>
						</div>
						<div className="o-filter__column__bx">
							<span className="title">Garagens</span>
							<div className="o-filter__garages">
							<ul>
								<li>
									<button onClick={this.setGarages.bind(this, 1)}>1</button>
								</li>
								<li>
									<button onClick={this.setGarages.bind(this, 2)}>2</button>
								</li>
								<li>
									<button onClick={this.setGarages.bind(this, 3)}>3</button>
								</li>
								<li>
									<button onClick={this.setGarages.bind(this, 4)}>4</button>
								</li>
								<li>
									<button onClick={this.setGarages.bind(this, 5)}>5+</button>
								</li>
							</ul>
							</div>
						</div>
					</div>
					<div className="o-filter__column">
						<div className="o-filter__column__bx">
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
						<div className="o-filter__column__bx">
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
						<div className="o-filter__column__bx">
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
		);
	}
}

module.exports = More;

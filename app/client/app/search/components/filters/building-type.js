const React = require('react');

class BuildingType extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Qual o tipo de imóvel?' };
	}

	render() {
		return (
			<div className="o-filter select dropdown">
				<span className="title">Tipo do Imóvel</span>
				<span className="title--result">{this.state.text}</span>
				<div className="o-filter__check">
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
			</div>
		);
	}
}

module.exports = BuildingType;

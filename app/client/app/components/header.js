const React = require('react');

class Header extends React.Component {
	render() {
		return (
			<div className="c-header">
				<div className="c-header__logo">
					<h1>
						<a href="/">
							<img src="/public/assets/imgs/logo/casamestra.svg" />
						</a>
					</h1>
				</div>
				<div className="c-header__nav">
					<nav>
						<ul className="nav">
							<li>
								<a href="/busca/comprar" className={ (this.props.pageActive === 'buy') ?  'active' : null }>Comprar</a>
							</li>
							<li>
								<a href="/busca/alugar" className={ (this.props.pageActive === 'rent') ?  'active' : null }>Alugar</a>
							</li>
							<li>
								<a href="/vender" className={ (this.props.pageActive === 'sell') ?  'active' : null }>Vender</a>
							</li>
							<li>
								<a href="/vizinhanca" className={ (this.props.pageActive === 'neighborhood') ?  'active' : null }>Vizinhança</a>
							</li>
						</ul>
						<ul className="nav-signin">
							<li>
								<a href="#">Entrar</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

React.PropType = {
	pageActive: React.PropTypes.string,
};

module.exports = Header;

const React = require('react');

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: false};
	}

	login(e) {
		e.preventDefault();
	}

	render() {
		const loginArea = <li><a href="#" onClick={this.login.bind(this)}>Entrar</a></li>;
		const userArea = () => {
			return (
				<li>
					<a href="#" onClick={this.login.bind(this)}>Entrar</a>
				</li>
			);
		};

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
								<a href="/busca/comprar" className="active">Comprar</a>
							</li>
							<li>
								<a href="/busca/alugar">Alugar</a>
							</li>
							<li>
								<a href="/vender">Vender</a>
							</li>
							<li>
								<a href="/vizinhanca">Vizinhança</a>
							</li>
						</ul>
						<ul className="nav-signin">
							{(this.state.user) ? loginArea : userArea}
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

module.exports = Header;

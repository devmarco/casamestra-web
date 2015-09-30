const React = require('react');

class Header extends React.Component {
    render() {
        return (
            <div className="c-header">
                <div className="c-header__logo">
                    <h1>
                        <a href="/">
                            <img src="/public/assets/imgs/logo/casamestra-white.svg" />
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

module.exports = Header;

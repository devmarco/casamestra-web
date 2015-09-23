const React = require('react');

class Estate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			e: this.props.data,
		};
	}

	formatMoney(number) {
		return 'R$ ' + parseInt(number, 10).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
	}

	render() {
		return (
			<div className="o-estate">
				<div className="o-estate__wrap">
					<a href={'/imovel/' + this.state.e.ecmid}>
						<div className="o-estate__image" style={{backgroundImage: `url(${this.state.e.images.cover})`}}>
							<img src={this.state.e.images.cover} alt={this.state.e.address} />
						</div>
						<div className="o-estate__about">
							<div className="o-estate__about__address">
								<span>{this.state.e.keyDetails.neighborhood}</span>
								<span>{this.state.e.address}</span>
							</div>
							<ul className="o-estate__about__info">
								<li>
									<span>
										{this.formatMoney(this.state.e.price)}
									</span>
								</li>
								<li className="icon icon-area">
									<span>
										{this.state.e.keyDetails.area}
									</span>
								</li>
								<li className="icon icon-park">
									<span>
										{this.state.e.garages}
									</span>
								</li>
								<li className="icon icon-beds">
									<span>
										{this.state.e.bedrooms}
									</span>
								</li>
								<li className="icon icon-bath">
									<span>
										{this.state.e.bathrooms}
									</span>
								</li>
							</ul>
						</div>
					</a>
				</div>
			</div>
		);
	}
}

Estate.propTypes = {
	data: React.PropTypes.object.isRequired,
};

module.exports = Estate;

const React = require('react');

class Estate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			e: this.props.data,
		};
	}

	render() {
		return (
			<div className="o-estate">
				<div className="o-estate__wrap">
					<a href={'/imovel/' + this.state.e.ecmid} style={{backgroundImage: 'url(' + this.state.e.images.cover + ')'}}>
						<div className="o-estate__about">
							<div className="o-estate__about__address">
								<span>{this.state.e.keyDetails.neighborhood}</span>
								<span>{this.state.e.address}</span>
							</div>
							<ul className="o-estate__about__info">
								<li>
									<span>
										{this.state.e.price}
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

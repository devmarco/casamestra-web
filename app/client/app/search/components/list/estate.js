const React = require('react');
const Modal = require('../../../components/modal');

class Estate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			e: this.props.data,
			modalOpen: false,
		};
	}

	openModal() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	formatMoney(number) {
		return 'R$ ' + parseInt(number, 10).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
	}

	render() {
		const { modalOpen } = this.state;

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
					<div className="o-estate__like">
						<button data-tip="hello world" onClick={this.openModal.bind(this)}>
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-10 0 100 80" enable-background="new 0 0 80 80" xmlSpace="preserve">
								<g>
									<path className="like--fill" d="M40,74.4l-34.1-34C-1.9,32.6-2,20,5.8,12.2c7.8-7.8,20.4-7.7,28.3,0.1l5.9,5.9l5.9-5.9
									c7.8-7.8,20.4-7.9,28.3-0.1c7.8,7.8,7.7,20.4-0.1,28.2L40,74.4z"></path>
									<path className="like--stroke" d="M40,77.2L4.5,41.8C0.3,37.6-2,32.1-2,26.2c0-5.8,2.3-11.3,6.4-15.4C8.5,6.6,14,4.4,19.8,4.4
									c5.9,0,11.5,2.3,15.7,6.5l4.5,4.5l4.5-4.5c4.2-4.2,9.8-6.5,15.7-6.5c5.8,0,11.3,2.3,15.4,6.4c4.1,4.1,6.4,9.6,6.4,15.4
									c0,5.9-2.3,11.4-6.5,15.6L40,77.2z M19.8,8.4c-4.8,0-9.2,1.9-12.6,5.2C3.9,17,2,21.4,2,26.2C2,31,3.9,35.5,7.4,39L40,71.5L72.6,39
									c3.5-3.4,5.4-8,5.4-12.8c0-4.7-1.9-9.2-5.2-12.6c-3.4-3.4-7.9-5.2-12.6-5.2c-4.8,0-9.4,1.9-12.8,5.3L40,21l-7.3-7.3
									C29.2,10.3,24.7,8.4,19.8,8.4z"></path>
								</g>
							</svg>
						</button>
						{modalOpen ? <Modal closeModal={this.closeModal.bind(this)} /> : ''}
					</div>
				</div>
			</div>
		);
	}
}

Estate.propTypes = {
	data: React.PropTypes.object.isRequired,
};

module.exports = Estate;

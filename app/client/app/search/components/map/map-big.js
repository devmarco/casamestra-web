/* global L */

const React 		= require('react');
const estate 		= React.createFactory(require('../list/estate'));

class MapBig extends React.Component {
	constructor(props) {
		super(props);
		this.state = {empty: 'none'};
		this.fullLayer = {
			layer: null,
			size: null,
		};
	}

	componentDidMount() {
		if (this.props.data.length) this.createMap(this.props.data);
	}

	componentWillReceiveProps(newProps) {
		this.update(newProps.data);
	}

	createMap(data) {
		// Private Key
		L.mapbox.accessToken = 'pk.eyJ1IjoibWFya29za3QiLCJhIjoiOTVmMjE4NTdmNDJjNWVkNTA0MDZlNDE0MWI1ZTdiZDUifQ.DJCF768JpbwaSuT5Ye0Xwg';

		window.mapBig = L.mapbox.map('c-search__map__map', 'markoskt.n3860n3a', {
			minZoom: 4,
			zoomControl: true,
		}).setView([40.73, -74.011], 5);

		this.createCluster(data);
	}

	createCluster(markers) {
		this.clusterGroup = new L.MarkerClusterGroup({
			polygonOptions: {
				fillColor: '#50E3C2',
				color: '#50E3C2',
				weight: 2,
				opacity: 1,
				fillOpacity: 0.5,
			},
			iconCreateFunction: cluster => {
				return L.mapbox.marker.icon({
					'marker-symbol': cluster.getChildCount(),
					'marker-color': '#2a3038',
				});
			},
		});

		// Prevent empty markers
		if (!markers.length) return false;

		markers.forEach(value => {
			const location = new L.LatLng(value.location.lat, value.location.lng);

			const marker = L.marker(location, {
				icon: L.icon({
					iconUrl: '/public/assets/imgs/svg/marker-icon.svg',
					iconSize: [36, 50],
				}),
			});

			marker.bindPopup(React.renderToString(estate({data: value})), {
				closeButton: false,
				minWidth: 300,
			});

			this.clusterGroup.addLayer(marker);
		});

		window.mapBig.addLayer(this.clusterGroup);
		window.mapBig.fitBounds(this.clusterGroup.getBounds());

		// Cache full layer for improve performance for lots of data
		if (!this.fullLayer.layer) {
			this.cacheAllMarkers(this.clusterGroup, markers.length);
		}
	}

	showEmptyMessage() {
		this.setState({ empty: 'block' });
	}

	hideEmptyMessage() {
		this.setState({ empty: 'none' });
	}

	update(markers) {
		window.mapBig.removeLayer(this.clusterGroup);

		if (markers.length) {
			this.hideEmptyMessage();
		} else {
			this.showEmptyMessage();
			return false;
		}

		if (markers.length === this.fullLayer.size) {
			window.mapBig.addLayer(this.fullLayer.layer);
			window.mapBig.fitBounds(this.fullLayer.layer.getBounds());
		} else {
			this.createCluster(markers);
		}
	}

	cacheAllMarkers(layer, size) {
		this.fullLayer.layer = layer;
		this.fullLayer.size = size;
	}

	render() {
		return (
			<div className="c-search__map">
				<div id="c-search__map__map"></div>
				<div className="c-search__map__empty" style={{display: this.state.empty}}>
					<p>Não encontramos nenhum imóvel com os detalhes especificados.</p>
					<p>Tente remover alguns filtros, trocar o valor ou selecionar uma nova vizinhança.</p>
				</div>
			</div>
		);
	}
}

MapBig.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = MapBig;

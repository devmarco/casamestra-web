var React = require('react');

class MapBig extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.createMap(this.props.data);
	}

	createMap(data) {
		// Private Key
		L.mapbox.accessToken = 'pk.eyJ1IjoibWFya29za3QiLCJhIjoiOTVmMjE4NTdmNDJjNWVkNTA0MDZlNDE0MWI1ZTdiZDUifQ.DJCF768JpbwaSuT5Ye0Xwg';

		console.log(document.querySelector('#map--big'));

		this.map = L.mapbox.map('map--big', 'markoskt.n3860n3a', {
			minZoom: 4,
			zoomControl: true,
		}).setView([40.73, -74.011], 5);

		this.createCluster(data);
	}

	createCluster(markers) {
		let clusterGroup = new L.MarkerClusterGroup({
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

		markers.forEach(value => {
			const marker = L.marker(new L.LatLng(value.location.lat, value.location.lng), {
				icon: L.icon({
					iconUrl: '/public/assets/imgs/svg/marker-icon.svg',
					iconSize: [36, 50],
				}),
			});

			//this.bindMarkerClick(marker, value);

			clusterGroup.addLayer(marker);
		});

		this.map.addLayer(this.clusterGroup);
		this.map.fitBounds(this.clusterGroup.getBounds());
	}

	render() {
		return (
			<div className="estates__bx__map">
				<div id="map--big"></div>
			</div>
		);
	}
}

module.exports = MapBig;

/* global L */

const React = require('react');
const FilterStore = require('../../stores/filter.store');

function getStateFromStore() {
	return FilterStore.get();
}

class MapBig extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		FilterStore.addChangeListener(this.onStoreChange);
	}

	componentDidMount() {
		this.createMap(this.props.data);
	}

	componentWillUnmount() {
		FilterStore.removeChangeListener(this.onStoreChange);
	}

	onStoreChange() {
		this.setState(getStateFromStore());
	}

	createMap(data) {
		// Private Key
		L.mapbox.accessToken = 'pk.eyJ1IjoibWFya29za3QiLCJhIjoiOTVmMjE4NTdmNDJjNWVkNTA0MDZlNDE0MWI1ZTdiZDUifQ.DJCF768JpbwaSuT5Ye0Xwg';

		this.map = L.mapbox.map('c-search__map__map', 'markoskt.n3860n3a', {
			minZoom: 4,
			zoomControl: true,
		}).setView([40.73, -74.011], 5);

		this.createCluster(data);
	}

	createCluster(markers) {
		const clusterGroup = new L.MarkerClusterGroup({
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
			const location = new L.LatLng(value.location.lat, value.location.lng);

			const marker = L.marker(location, {
				icon: L.icon({
					iconUrl: '/public/assets/imgs/svg/marker-icon.svg',
					iconSize: [36, 50],
				}),
			});

			//this.bindMarkerClick(marker, value);

			clusterGroup.addLayer(marker);
		});

		this.map.addLayer(clusterGroup);
		this.map.fitBounds(clusterGroup.getBounds());
	}

	render() {
		return (
			<div className="c-search__map">
				<div id="c-search__map__map"></div>
			</div>
		);
	}
}

MapBig.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = MapBig;

/* global L */

const React = require('react');

class MapSmall extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.createMap(this.props.data);
	}

	createMap(data) {
		// Private Key
		L.mapbox.accessToken = 'pk.eyJ1IjoibWFya29za3QiLCJhIjoiOTVmMjE4NTdmNDJjNWVkNTA0MDZlNDE0MWI1ZTdiZDUifQ.DJCF768JpbwaSuT5Ye0Xwg';

		window.mapList = L.mapbox.map('c-search__list__map__map', 'markoskt.n3860n3a', {
			minZoom: 4,
			zoomControl: true,
		}).setView([40.73, -74.011], 5);

		this.createMarkers(window.mapList, data);
	}

	createMarkers(map, markers) {
		const markersGroup = new L.FeatureGroup();

		markers.forEach((value) => {
			const location = new L.LatLng(value.location.lat, value.location.lng);

			const marker = L.marker(location, {
				icon: L.icon({
					iconUrl: '/public/assets/imgs/svg/marker-icon.svg',
					iconSize: [36, 50],
				}),
			});

			markersGroup.addLayer(marker);

			// this.bindMarkerHover(marker, estates[index]);
		});

		map.addLayer(markersGroup);

		map.fitBounds(markersGroup.getBounds());
	}

	render() {
		return (
			<div className="c-search__list__map">
				<div id="c-search__list__map__map"></div>
			</div>
		);
	}
}

MapSmall.propTypes = {
	data: React.PropTypes.array.isRequired,
};

module.exports = MapSmall;

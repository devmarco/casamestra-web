/* global L */

const React 		= require('react');
const _ 			= require('lodash');
const FilterStore 	= require('../../stores/filter.store');

class MapSmall extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		FilterStore.addChangeListener(this.onFilterChangeMAP.bind(this));
	}

	componentDidMount() {
		if (this.props.data.length) this.createMap(_.slice(this.props.data, 0, 12));
	}

	onFilterChangeMAP() {
		this.update(_.slice(FilterStore.get().data, 0, 12));
	}

	createMap(data) {
		// Private Key
		L.mapbox.accessToken = 'pk.eyJ1IjoibWFya29za3QiLCJhIjoiOTVmMjE4NTdmNDJjNWVkNTA0MDZlNDE0MWI1ZTdiZDUifQ.DJCF768JpbwaSuT5Ye0Xwg';

		window.mapList = L.mapbox.map('c-search__list__map__map', 'markoskt.n3860n3a', {
			minZoom: 4,
			zoomControl: true,
		}).setView([40.73, -74.011], 5);

		this.createMarkers(data);
	}

	createMarkers(markers) {
		this.markersGroup = new L.FeatureGroup();

		// Prevent empty markers
		if (!markers.length) return false;

		markers.forEach((value) => {
			const location = new L.LatLng(value.location.lat, value.location.lng);

			const marker = L.marker(location, {
				icon: L.icon({
					iconUrl: '/public/assets/imgs/svg/marker-icon.svg',
					iconSize: [36, 50],
				}),
			});

			this.markersGroup.addLayer(marker);

			// this.bindMarkerHover(marker, estates[index]);
		});

		window.mapList.addLayer(this.markersGroup);

		window.mapList.fitBounds(this.markersGroup.getBounds());
	}

	update(markers) {
		window.mapList.removeLayer(this.markersGroup);
		this.createMarkers(markers);
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

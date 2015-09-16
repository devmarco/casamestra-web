/* global Box */

Box.Application.addService('map.service', application => {
	const L 	= application.getGlobal('L');
	const $ 	= application.getGlobal('jQuery');

	return {
		render: render(config) {
			if (!L) return false;

			// Private Key
			L.mapbox.accessToken = 'pk.eyJ1IjoibWFya29za3QiLCJhIjoiOTVmMjE4NTdmNDJjNWVkNTA0MDZlNDE0MWI1ZTdiZDUifQ.DJCF768JpbwaSuT5Ye0Xwg';

			this.map = L.mapbox.map(config.mapClass, 'markoskt.n3860n3a', {
				minZoom: 4,
				zoomControl: config.zoomControl,
			}).setView([40.73, -74.011], 5);

			if (config.cluster) {
				this.createClusterMarkers(config.markers);
			} else {
				this.createMarkers(config.markers);
			}
		},
		update: function(markers) {
			if (this.clusterGroup) {
				this.map.removeLayer(this.clusterGroup);
				this.createClusterMarkers(markers);
			} else {
				this.map.removeLayer(this.markersGroup);
				this.createMarkers(markers);
			}
		},
		createClusterMarkers: function(markers) {
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

			markers.forEach(value => {
				const marker = L.marker(new L.LatLng(value.location.lat, value.location.lng), {
					icon: L.icon({
						iconUrl: '/public/assets/imgs/svg/marker-icon.svg',
						iconSize: [36, 50],
					}),
				});

				this.bindMarkerClick(marker, value);

				this.clusterGroup.addLayer(marker);
			});

			this.map.addLayer(this.clusterGroup);

			this.map.fitBounds(this.clusterGroup.getBounds());
		},
		createMarkers: function(markers) {
			const estates = $('.o-estate');

			this.markersGroup = new L.FeatureGroup();

			markers.forEach((value, index) => {
				const marker = L.marker(new L.LatLng(value.location.lat, value.location.lng), {
					icon: L.icon({
						iconUrl: '/public/assets/imgs/svg/marker-icon.svg',
						iconSize: [36, 50],
					}),
				});

				this.markersGroup.addLayer(marker);

				this.bindMarkerHover(marker, estates[index]);
			});

			this.map.addLayer(this.markersGroup);

			this.map.fitBounds(this.markersGroup.getBounds());
		},
		template: function(estate) {
			const t = "<div class='estate estate--map'>" +
			'    <a style="background-image: url(' + estate.cover + ')"">' +
			'        <div class="estate__address"><span class="neighborhood">' + estate.neighborhood + '</span><span class="address">' + estate.address + '</span></div>' +
			'        <div class="estate__info">' +
			'            <ul>' +
			'                <li class="icon icon-area"><span>' + estate.area + 'm² </span></li>' +
			'                <li class="icon icon-beds"><span>' + estate.bedrooms + '</span></li>' +
			'                <li class="icon icon-bath"><span>' + estate.bathrooms + '</span></li>' +
			'                <li><span>" + _util.formatMoney(estate.price) + "</span></li>' +
			'            </ul>' +
			'        </div>' +
			'    </a>' +
			'</div>';

			return t;
		},
		destroy: function() {
			if (this.map) this.map.remove();

			this.clusterGroup = null;
			this.markersGroup = null;
		},
		bindMarkerHover: function(marker, estate) {
			marker.on('mouseover', () => {
				marker.setIcon(L.icon({
					iconUrl: '/public/assets/imgs/svg/marker-icon-hover.svg',
				}));

				$(estate).addClass('estate--hover');
			});

			marker.on('mouseout', () => {
				marker.setIcon(L.icon({
					iconUrl: '/public/assets/imgs/svg/marker-icon.svg',
				}));

				$(estate).removeClass('estate--hover');
			});

			marker.on('click', () => {
				const distance = $(estate).offset().top;
				$('html,body').animate({ scrollTop: distance - 100 }, 800);
			});
		},
		bindMarkerClick: function(marker, value) {
			marker.bindPopup(this.template(value), {
				closeButton: false,
				minWidth: 320,
			});

			marker.on('click', () => this.openPopup());
		},
	};
});

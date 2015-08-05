Box.Application.addService('map.service', function(application) {
	'use strict';

	var _util 	= application.getService('utils.service'),
		L 		= application.getGlobal('L');

	return {
		render: function(config) {

			if (!L) return false;

			//Private Key
			L.mapbox.accessToken = 'pk.eyJ1IjoibWFya29za3QiLCJhIjoiOTVmMjE4NTdmNDJjNWVkNTA0MDZlNDE0MWI1ZTdiZDUifQ.DJCF768JpbwaSuT5Ye0Xwg';

			this.map = L.mapbox.map('map-canvas', 'markoskt.n3860n3a', {
				minZoom: 5
			}).setView([40.73, -74.011], 5);

			this.createMarkers(config);
		},
		createMarkers: function(config, callback) {
			var markers,
				marker,
				_this,
				i = 0;

			_this = this;

			this.clusterGroup = new L.MarkerClusterGroup({
				polygonOptions: {
					fillColor: '#3887be',
					color: '#3887be',
					weight: 2,
					opacity: 1,
					fillOpacity: 0.5
				},
				iconCreateFunction: function(cluster) {
					return L.mapbox.marker.icon({
						'marker-symbol': cluster.getChildCount(),
						'marker-color': '#2a3038',
					});
				}
			});

			markers = config.markers;

			for (i; i < markers.length; i++) {
		
				marker = L.marker(new L.LatLng(markers[i].location.lat, markers[i].location.lng), {
					icon: L.icon({
						iconUrl: 'public/assets/imgs/svg/marker-icon.svg',
						iconSize:     [36, 50]
					}),
					title: markers[i].title
				});

				marker.bindPopup(_this.template(markers[i]),{
					closeButton: false,
					minWidth: 320
				});

				marker.on('click', function (e) {
            		this.openPopup();
        		});

				this.clusterGroup.addLayer(marker);
			}

			this.map.addLayer(this.clusterGroup);	

			setTimeout(function() {
				_this.update();
			}, 5000);
		},
		update: function(markers) {
			this.map.removeLayer(this.clusterGroup)
		},
		template: function(estate) {
			var t = "<div class='estate estate--map'>"+
			"    <a style='background-image: url("+estate.cover+")'>"+
			"        <div class='estate__address'><span class='neighborhood'>"+estate.neighborhood+"</span><span class='address'>"+estate.address+"</span></div>"+
			"        <div class='estate__info'>"+
			"            <ul>"+
			"                <li class='icon icon-area'><span>"+estate.area+"m² </span></li>"+
			"                <li class='icon icon-beds'><span>"+estate.bedrooms+"</span></li>"+
			"                <li class='icon icon-bath'><span>"+estate.bathrooms+"</span></li>"+
			"                <li><span>"+_util.formatMoney(estate.price)+"</span></li>"+
			"            </ul>"+
			"        </div>"+
			"    </a>"+
			"</div>";

			return t;
		}
	}
});
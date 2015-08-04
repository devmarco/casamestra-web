Box.Application.addService('map.service', function(application) {
	'use strict';

	var google = application.getGlobal('google');

	return {
		render: function(config) {
			var _this = this,
				mapOptions = config.options || {},
				styles,
				marker,
				currentMarker,
				position,
				m = 0;

			if (!config.options) {
				mapOptions = {
					center: { lat: -19.916681, lng: -43.934493 },
					zoom: 4,
					disableDefaultUI: true
				};
			}

			if (!google || !config.mapClass) return false;

			//Instance the map
			this.map = new google.maps.Map(document.querySelector(config.mapClass), mapOptions);
			this.markers = [];

			//Change the style of the map
			styles = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];

			this.map.setOptions({styles: styles});

			if (config.markers) {

				this.bounds = new google.maps.LatLngBounds();

				for(m; m < config.markers.length; m++) {
					currentMarker = config.markers[m],
					position = new google.maps.LatLng(currentMarker.location.lat, currentMarker.location.lng);

					this.bounds.extend(position);

					marker = new google.maps.Marker({
						position: position,
						map: _this.map,
						title: currentMarker.title,
						icon: 'public/assets/imgs/svg/marker-icon.svg',
						animation: google.maps.Animation.DROP,
						index: m,
					});

					this.markers.push(marker);

					// Allow each marker to have an info window    
					// google.maps.event.addListener(marker, 'click', (function(marker, i) {
					// 	return function() {
					// 		infoWindow.setContent(infoWindowContent[i][0]);
					// 		infoWindow.open(map, marker);
					// 	}
					// })(marker, i));

					// Automatically center the map fitting all markers on the screen
					//this.map.fitBounds(this.bounds);

					google.maps.event.addListener(marker, 'mouseover', onHover);
				}
			} 

			return this.map;
		},
		update: function(markers) {
			var _this = this,
				i = 0;

			if (!this.markers) return false;

			//Clear the markers
			this.clear();

			for (i; i < markers.length; i++) {
				addMarkers(markers[i], i*200, i);
			}

			function addMarkers(marker, time, index) {
				window.setTimeout(function() {
					_this.markers.push(new google.maps.Marker({
						position: new google.maps.LatLng(marker.location.lat, marker.location.lng),
						map: _this.map,
						title: marker.title,
						icon: 'public/assets/imgs/svg/marker-icon.svg',
						animation: google.maps.Animation.DROP,
						index: index
					}));
				}, time);
			}
		},
		clear: function() {
			var i = 0;

			if (!this.markers) return false;

			for (i; i < this.markers.length; i++) {
				this.markers[i].setMap(null);
			}

			this.markers = [];
		}
	}

	function onHover() {
		Box.Application.broadcast('markerHover', this.index);
	}

	function onClick() {
		console.log(this);
	}
});
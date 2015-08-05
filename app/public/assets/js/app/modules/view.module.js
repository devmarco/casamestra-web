Box.Application.addModule('estates.view', function(context) {
	'use strict';

	var _view = context.getService('view.service');

	return {
		init: function() {
			console.log('View initialized');
		},
		onclick: function(event, element, elementType) {
			if (elementType === 'map') this.renderMap(element);
			if (elementType === 'list') this.renderList(element);
		},
		renderMap: function(element) {
			$(element).closest('main').removeClass('list-active').addClass('map-active');
			_view.map();
		},
		renderList: function(element) {
			$(element).closest('main').removeClass('map-active').addClass('list-active');
			_view.list();
		}
	}
});
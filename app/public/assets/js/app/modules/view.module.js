Box.Application.addModule('estates.view', function(context) {
	'use strict';

	var _render = context.getService('render.service');

	return {
		init: function() {
			console.log('View initialized');
		},
		onclick: function(event, element, elementType) {
			if (elementType === 'map') this.renderMap(element);
			if (elementType === 'list') this.renderList(element);
		},
		renderMap: function(element) {
			_render.map();
		},
		renderList: function(element) {
			_render.list();
		}
	}
});
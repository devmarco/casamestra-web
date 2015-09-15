/* global Box */

'use strict';

Box.Application.addService('render.service', function (application) {
	var _storage = application.getService('storage.service');
	var _utils = application.getService('utils.service');
	var _map = application.getService('map.service');

	var paperclip = application.getGlobal('paperclip');
	var _ = application.getGlobal('_');

	/**
  * Estates Template
  */

	var t = '<repeat each="{{ estates}}" as="e">' + '<div class="o-estate">' + '    <a href="/imovel/{{ e.ecmid }}" style="background-image: url({{ e.images.cover }})">' + '        <div class="o-estate__about">' + '            <div class="o-estate__about__address">' + '                <span>{{ e.keyDetails.neighborhood }}</span>' + '                <span>{{ e.address }}</span>' + '            </div>' + '            <ul class="o-estate__about__info">' + '                <li><span>{{ e.price | formatMoney(e.price) }}</span></li>' + '                <li class="icon icon-area"><span>{{ e.keyDetails.area }}m</span></li>' + '                <li class="icon icon-park"><span>{{ e.garages }}</span></li>' + '                <li class="icon icon-beds"><span>{{ e.bedrooms }}</span></li>' + '                <li class="icon icon-bath"><span>{{ e.bathrooms }}</span></li>' + '            </ul>' + '        </div>' + '    </a>' + '</div>' + '</repeat>';

	// Instance formatMoney to paperclip
	paperclip.modifiers.formatMoney = _utils.formatMoney;

	// Define the template
	var template = paperclip.template(t);

	return {
		update: function update(config) {
			if (undefined.view) undefined.view.set('estates', config.data);

			_map.update(config.data);

			_utils.updateTexts(_storage.get().filters, config.pagination || null);
		},
		map: function map(data) {
			if (undefined.view) undefined.view.remove();

			_map.destroy();

			_map.render({
				mapClass: 'map--big',
				markers: data,
				bounds: true,
				zoomControl: true,
				cluster: true
			});

			_utils.updateTexts(_storage.get().filters);
		},
		list: function list(data) {
			_map.destroy();

			undefined.view = template.view({
				estates: _.slice(data, 0, 12)
			});

			document.querySelector('.render-area').appendChild(undefined.view.render());

			_map.render({
				mapClass: 'map--small',
				markers: _.slice(data, 0, 12),
				bounds: true,
				zoomControl: false,
				cluster: false
			});

			_utils.updateTexts(_storage.get().filters);
		}
	};
});

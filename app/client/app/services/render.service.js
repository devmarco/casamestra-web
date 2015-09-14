Box.Application.addService('render.service', function(application) {
	'use strict';

	//Globals
	var paperclip = application.getGlobal('paperclip');

	//Services
	var _estates  = application.getService('estates.service'),
		_storage  = application.getService('storage.service'),
		_utils 	  = application.getService('utils.service'),
		_map 	  = application.getService('map.service'),
		t;

	//vars
	var template;

	/**
	 * Estates Template
	 */

	t = "<repeat each='{{ estates }}' as='e'>"+
	"<div class='estate estate--medium'>"+
	"    <a href='/imovel/{{ e.ecmid }}' style='background-image: url({{ e.images.cover }})'>"+
	"        <div class='estate__info'>"+
	"            <div class='address'>"+
	"                <span>{{ e.keyDetails.neighborhood }}</span>"+
	"                <span>{{ e.address }}</span>"+
	"            </div>"+
	"            <ul>"+
	"                <li><span>{{ e.price | formatMoney(e.price) }}</span></li>"+
	"                <li class='icon icon-area'><span>{{ e.keyDetails.area }}m² </span></li>"+
	"                <li class='icon icon-park'><span>{{ e.garages }} </span></li>"+
	"                <li class='icon icon-beds'><span>{{ e.bedrooms }}</span></li>"+
	"                <li class='icon icon-bath'><span>{{ e.bathrooms }}</span></li>"+
	"            </ul>"+
	"        </div>"+
	"    </a>"+
	"</div>"+
	"</repeat>";

	//Instance formatMoney to paperclip
	paperclip.modifiers.formatMoney = _utils.formatMoney;

	//Define the template
	template = paperclip.template(t);

	return {
		update: function(config) {
			if (this.view) this.view.set('estates', config.data);

			_map.update(config.data);

			_utils.updateTexts(_storage.get().filters, config.pagination || null);
		},
		map: function(data) {

			if (this.view) this.view.remove();

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
		list: function(data) {

			_map.destroy();

			this.view = template.view({
				estates: _.slice(data, 0, 12)
			});

			document.querySelector('.render-area').appendChild(this.view.render());

			_map.render({
				mapClass: 'map--small',
				markers: _.slice(data, 0, 12),
				bounds: true,
				zoomControl: false,
				cluster: false
			});

			_utils.updateTexts(_storage.get().filters);
		}
	}
});

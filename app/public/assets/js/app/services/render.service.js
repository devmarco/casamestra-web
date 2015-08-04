Box.Application.addService('render.service', function(application) {
	'use strict';

	var _utils 	  = application.getService('utils.service'),
		_map 	  = application.getService('map.service'),
		t,

		//Globals
		paperclip = application.getGlobal('paperclip');

	/**
	 * Estates Template
	 */

	t = "<repeat each='{{ estates }}' as='e'>"+
	"<div class='estate estate--medium'>"+
	"    <a style='background-image: url({{ e.cover }})'>"+
	"        <div class='estate__address'><span class='neighborhood'>{{ e.neighborhood }}</span><span class='address'>{{ e.address }}</span></div>"+
	"        <div class='estate__info'>"+
	"            <ul>"+
	"                <li class='icon icon-area'><span>{{ e.area }}m² </span></li>"+
	"                <li class='icon icon-beds'><span>{{ e.bedrooms }}</span></li>"+
	"                <li class='icon icon-bath'><span>{{ e.bathrooms }}</span></li>"+
	"                <li><span>{{ e.price | formatMoney(e.price) }}</span></li>"+
	"            </ul>"+
	"        </div>"+
	"    </a>"+
	"</div>"+
	"</repeat>";

	return {
		update: function(config) {
			//Update view
			this.view.set('estates', config.data);

			//Update map
			_map.update(config.data);

			_utils.updateTexts(config);
		},
		render: function(config) {
			//Define the template
			var template = paperclip.template(t);

			//Instance formatMoney to paperclip
			paperclip.modifiers.formatMoney = _utils.formatMoney;

			this.view = template.view({
				estates: config.data
			});

			//Render
			document.querySelector(config.listClass).appendChild(this.view.render());

			//Render map
			_map.render({
				mapClass: config.mapClass,
				markers: config.data,
				bounds: config.bounds || false
			});

			_utils.updateTexts({});
		}
	}
});
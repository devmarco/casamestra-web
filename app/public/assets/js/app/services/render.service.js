Box.Application.addService('render.service', function(application) {
	'use strict';

	var _estates  = application.getService('estates.service'),
		_storage  = application.getService('storage.service'),
		_utils 	  = application.getService('utils.service'),
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
			if (this.view) this.view.set('estates', config.data);

			//Update map
			_map.update(config.data);

			_utils.updateTexts(config);
		},
		map: function(config) {
			_estates.get({
				fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title'
			}).then(function(data) {
				_storage.set(data, 'private');
				_map.render({
					mapClass: 'map--big',
					markers: data,
					bounds: true
				});
			});
		},
		list: function(config) {
			//Define the template
			var template = paperclip.template(t);

			//Instance formatMoney to paperclip
			paperclip.modifiers.formatMoney = _utils.formatMoney;

			_estates.get({
				fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title'
			}).then(function(data) {
				_storage.set(data, 'private');
				
				this.view = template.view({
					estates: data
				});

				//Render
				document.querySelector('.render-area').appendChild(this.view.render());

				_utils.updateTexts({});

			});
		}
	}
});
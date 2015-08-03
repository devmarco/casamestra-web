Box.Application.addService('render.service', function(application) {
	'use strict';

	var _utils = application.getService('utils.service'),
		estatesTpl,
		template;
	
	estatesTpl =  "<repeat each='{{ estates }}' as='e'>"+
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

	//Define the template
	var template = paperclip.template(estatesTpl);

	//Instance formatMoney to paperclip
	paperclip.modifiers.formatMoney = _utils.formatMoney;

	return {
		update: function(config) {
			this.view.set('estates', config.data);
			_utils.updateTexts(config);
		},
		render: function(config) {
			this.view = template.view({
				estates: _.slice(config.data, 0, 12)
			});

			document.querySelector(config.elementClass).appendChild(this.view.render());

			_utils.updateTexts({
				data: config.data
			});
		}
	};
});
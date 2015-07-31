Box.Application.addService('render-estates', function(context) {
	'use strict';

	var _estates 	= context.getService('estates'),
		_utils 		= context.getService('utils'),
		view, estatesTpl;

	estatesTpl = 
	"<repeat each='{{ estates }}' as='e'>"+
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
		update: function(data, filters) {
			this.view.set('estates', data);
			
			(filters) ? this.updateTexts(data, filters) : false;

			//Set the filtered data to cache
			_estates.cache.set(data);
		},
		render: function(data) {
			var template = paperclip.template(estatesTpl);

			paperclip.modifiers.formatMoney = _utils.formatMoney;

			this.view = template.view({
				estates: _.slice(data, 0, 12)
			});

			document.querySelector('.render-area').appendChild(this.view.render());

			this.updateTexts(data);
		},
		updateTexts: function(data, filters) {
			var elMore 	= $('.js-selected-more'),
				elBeds 	= $('.js-selected-beds'),
				elPrice = $('.js-selected-price'),
				count 	= 0,
				i;

			function createText(value) {
				var items,
					text = '',
					i = 0;

				items = value.sort(function(a, b){return a-b});

				for (i; i < value.length; i++) {
					if (i === (value.length -1)) {
						(text !== '') ? text+= ' e '+items[i]+'' : text+= ''+items[i]+'';
					} else {
						(text !== '') ? text+= ','+items[i]+'' : text+= ''+items[i]+'';
					}
				}

				return text;
			}

			//Set filter
			(!filters) ? filters = {} : false;

			(!filters['bedrooms']) 		? elBeds.text('Quartos') : elBeds.text(createText(filters['bedrooms'])+' '+'Quartos');
			(!filters['price']) 		? elPrice.text('Preço')  : elPrice.text((filters['price'].min || '')+' até '+(filters['price'].max || '-'));	
			($.isEmptyObject(filters)) 	? elMore.text('Mais') 	 : elMore.text('('+count+') Mais');

			document.querySelector('.total-result').innerHTML = data.length;
		}
	};
});
Box.Application.addBehavior('pagination', function(context) {

	var _service = context.getService('estates'),
		_render  = context.getService('render-estates')
		nextItem = 12;

	return {
		onclick: function(e, element, elementType) {

			if (elementType === 'p-next') next();
			if (elementType === 'p-prev') prev();

			function prev() {

			}

			function next() {
				var data = _service.cache.get(),
					dataPagined = _.slice(data, (nextItem-1), (nextItem+12));

				console.log(nextItem, data.length, dataPagined);

				if (nextItem <= data.length) {
					_render.update(dataPagined);
				}
				
				nextItem = (nextItem+12);
			}

			return false;			
		}
	};
});

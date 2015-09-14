Box.Application.addBehavior('pagination', function(context) {

	var _storage 	= context.getService('storage.service'),
		_render  	= context.getService('render.service');

	return {
		init: function() {
			this.nextItem = 0;
			this.prevItem = 0;
			this.itemsDisplay = 12;
		},
		onclick: function(e, element, elementType) {
			var _this = this;

			if (elementType === 'p-next') next();
			if (elementType === 'p-prev') prev();

			function prev() {
				var data = _storage.get().data;

				if (_this.nextItem !== 0) {
					
					if (_this.prevItem <= 0) _this.prevItem = 0;
					
					_render.update({
						data: _.slice(data, _this.prevItem, _this.nextItem),
						pagination: {
							from: (_this.prevItem+1),
							to: _this.nextItem
						}
					});
					
					_this.nextItem = (_this.nextItem-_this.itemsDisplay);
					_this.prevItem = (_this.prevItem-_this.itemsDisplay);
				} 
			}

			function next() {
				var data = _storage.get().data,
					dataPagined;

				if ((_this.nextItem+_this.itemsDisplay) > data.length) {
					return false;
				}

				_this.prevItem = (_this.nextItem-1 < 0) ? 0 : (_this.nextItem-1);
				_this.nextItem = (_this.nextItem+_this.itemsDisplay);

				_render.update({
					data: _.slice(data, (_this.nextItem), (_this.nextItem+_this.itemsDisplay)),
					pagination: {
						from: _this.nextItem,
						to: ((_this.nextItem+_this.itemsDisplay >= data.length) ? data.length : _this.nextItem+_this.itemsDisplay)
					}
				});
			}

			return false;			
		}
	};
});
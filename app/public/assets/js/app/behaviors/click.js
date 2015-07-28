Box.Application.addBehavior('item-menu', function(context) {
	var documentClick;

	return {
		onclick: function(e, element, elementType) {
			var el 		= $(element),
				area 	= el.parent().find(el.attr('dropdown-area')),
				button 	= el;

			if (elementType !== 'dropdown') return false;

			if (!checkParent(e.target, area[0])) {
				if (checkParent(e.target, button[0])) {
					if (!area.is(':visible')) {
						area[0].style.display = "block";
					} else {
						area[0].style.display = "none";
					}
				} else {
					area[0].style.display = "none";
				}
			}

			function checkParent(t, elm) {
				while(t.parentNode) {
					if( t == elm ) {return true;}
					t = t.parentNode;
				}
				return false;
			}

			e.stopPropagation();

			if (!documentClick) {
				$(document).on('click', function(e) {
					e.stopImmediatePropagation();

					if (!checkParent(e.target, area[0])) {
						area[0].style.display = "none";
					}
					
				});

				documentClick = 'isBind';
			}
		}
	};

});
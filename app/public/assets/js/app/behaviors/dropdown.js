Box.Application.addBehavior('dropdown', function(context) {
	var documentClick;

	return {
		onclick: function(e, element, elementType) {
			var el 		= $(element),
				area 	= el.parent().find(el.attr('dropdown-content')),
				button 	= el;

			if (elementType !== 'dropdown') return false;

			if (!checkParent(e.target, area)) {
				if (checkParent(e.target, button)) {
					$('.dropdown-content').hide();
					(!area.is(':visible')) ? area[0].style.display = 'block' : area[0].style.display = 'none';
				} else {
					area[0].style.display = 'none';
				}
			}

			function checkParent(t, elm) {
				while(t.parentNode) {
					if( t == elm[0] ) {return true;}
					t = t.parentNode;
				}
				return false;
			}

			e.stopPropagation();

			$(document).on('click', function(e) {
				e.stopImmediatePropagation();
				
				if (!checkParent(e.target, area)) {
					area[0].style.display = "none";
					$(document).off('click');
				}
			});
		}
	};
});
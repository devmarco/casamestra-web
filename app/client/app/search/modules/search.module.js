/* global Box */

const React 	= require('react');
const Search 	= React.createFactory(require('../components/search'));

Box.Application.addModule('search', context => {
	return {
		behaviors: ['dropdown'],
		init: function() {
			React.render(Search(), document.querySelector('main'));
		}
	}
});

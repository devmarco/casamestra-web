/* global Box */

const React 	= require('react');
const Header 	= React.createFactory(require('../components/header'));

Box.Application.addModule('header', () => {
	return {
		init: function() {
			React.render(Header(), document.querySelector('header'));
		},
	};
});

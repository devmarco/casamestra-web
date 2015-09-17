/* global Box */

const React 	= require('react');
const Search 	= require('../components/search');

Box.Application.addModule('search', context => {
	return {
		init: function() {
			console.log('init');
		}
	}
});

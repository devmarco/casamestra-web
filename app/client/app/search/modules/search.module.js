/* global Box */

const React 	= require('react');
const storage 	= require('../services/storage.service');
const Search 	= React.createFactory(require('../components/search'));

Box.Application.addModule('search', context => {
	const _estates = context.getService('estates.service');

	return {
		behaviors: ['dropdown'],
		init: function() {
			_estates.get({
				fields: 'images,price,keyDetails,garages,address,bathrooms,bedrooms,location,title,ecmid,createdAt',
			}).then(data => {
				storage.set('private', data);
				React.render(Search({data: data}), document.querySelector('main'));
			});
		},
	};
});

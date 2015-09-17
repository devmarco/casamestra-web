/* global Box */

const React 	= require('react');
const Search 	= require('../components/search');
const MapBig 	= require('../components/map-big');

Box.Application.addModule('search', context => {
    const _render  = context.getService('render.service');
	const _storage = context.getService('storage.service');
	const _estates = context.getService('estates.service');

    return {
        init: function() {

            _estates.get({
                fields: 'cover,price,neighborhood,address,bathrooms,bedrooms,area,location,title,cmid',
            }).then(data => {
                React.render(<Search data={data} />, document.querySelector('main'));
                //_storage.set('private', data);
                //_render.map(data);
            });
        }
    }
});

const React     	= require('react/addons');
const Header    	= React.createFactory(require('./../../client/app/components/header'));
const Search    	= React.createFactory(require('./../../client/app/search/components/search'));
const headerRender 	= React.renderToString(Header());
const searchRender 	= React.renderToString(Search({data: []}));

const components = {
	header: {
		get: () => headerRender,
	},
	search: {
		get: data => searchRender,
	},
};

module.exports = components;

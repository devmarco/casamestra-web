const React     				= require('react/addons');
const Header    				= React.createFactory(require('./../../client/app/components/header'));
const Search    				= React.createFactory(require('./../../client/app/search/components/search'));
const headerRenderHome 			= React.renderToString(Header());
const headerRenderBuy 			= React.renderToString(Header({pageActive: 'buy'}));
const headerRenderRent 			= React.renderToString(Header({pageActive: 'rent'}));
const headerRenderSell 			= React.renderToString(Header({pageActive: 'sell'}));
const headerRenderNeighborhood 	= React.renderToString(Header({pageActive: 'neighborhood'}));
const searchRender 				= React.renderToString(Search({data: []}));

const components = {
	header: {
		getHome: () => headerRenderHome,
		getBuy: () => headerRenderBuy,
		getRent: () => headerRenderRent,
		getSell: () => headerRenderSell,
		getNeighborhood: () => headerRenderNeighborhood,
	},
	search: {
		get: () => searchRender,
	},
};

module.exports = components;

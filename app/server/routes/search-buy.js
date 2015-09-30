/* ------------------------------------ *\
	[SEARCH BUY]
\* ------------------------------------ */

const components = require('../config/components');

const searchBuy = {
	method: 'GET',
	path: '/busca/comprar',
	handler: (req, reply) => {
		reply.view('search', {
			activePage: 'buy',
			searchRender: components.search.get([]),
			headerRender: components.header.get(),
		});
	},
};

module.exports = searchBuy;

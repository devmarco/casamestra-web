/* ------------------------------------ *\
	[SEARCH RENT]
\* ------------------------------------ */

const components = require('../config/components');

const searchRent = {
	method: 'GET',
	path: '/busca/alugar',
	handler: (req, reply) => {
		reply.view('search', {
			activePage: 'rent',
			searchRender: components.search.get([]),
			headerRender: components.header.get(),
		});
	},
};

module.exports = searchRent;

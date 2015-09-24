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
			reactRender: components.search.get([]),
		});
	},
};

module.exports = searchRent;

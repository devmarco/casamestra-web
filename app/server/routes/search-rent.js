/* ------------------------------------ *\
	[SEARCH RENT]
\* ------------------------------------ */

const React 			= require('react/addons');
const Search 			= React.createFactory(require('./../../client/app/search/components/search'));
const searchRendered 	= React.renderToString(Search({data: []}));

const searchRent = {
	method: 'GET',
	path: '/busca/alugar',
	handler: (req, reply) => {
		reply.view('search', {
			activePage: 'rent',
			reactRender: searchRendered,
		});
	},
};

module.exports = searchRent;

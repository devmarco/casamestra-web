/* ------------------------------------ *\
	[SEARCH BUY]
\* ------------------------------------ */

const React = require('react/addons');
const Search = React.createFactory(require('./../../client/app/search/components/search'));

const searchBuy = {
	method: 'GET',
	path: '/busca/comprar',
	handler: (req, reply) => {
		const searchRendered = React.renderToString(Search());

		console.log(searchRendered);

		reply.view('search', {
			activePage: 'buy',
			reactRender: searchRendered,
		});
	},
};

module.exports = searchBuy;

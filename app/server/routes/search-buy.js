/* ------------------------------------ *\
	[SEARCH BUY]
\* ------------------------------------ */

const searchBuy = {
	method: 'GET',
	path: '/busca/comprar',
	handler: (req, reply) => {
		reply.view('search', {
			activePage: 'buy',
		});
	},
};

module.exports = searchBuy;

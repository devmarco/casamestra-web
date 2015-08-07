/*------------------------------------ *\
	[SEARCH BUY]
\*------------------------------------*/

var searchBuy = {
	method: 'GET',
	path: '/busca/comprar',
	handler: function(req, reply) {
		reply.view('search', {
			activePage: 'buy'
		});
	}
}

module.exports = searchBuy;
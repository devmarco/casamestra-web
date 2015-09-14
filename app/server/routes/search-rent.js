/*------------------------------------ *\
	[SEARCH RENT]
\*------------------------------------*/

var searchRent = {
	method: 'GET',
	path: '/busca/alugar',
	handler: function(req, reply) {
		reply.view('search', {
			activePage: 'rent'
		});
	}
}

module.exports = searchRent;
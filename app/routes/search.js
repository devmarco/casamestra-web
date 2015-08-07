/*------------------------------------ *\
	[SEARCH]
\*------------------------------------*/

var search = {
	method: 'GET',
	path: '/busca',
	handler: function(req, reply) {
		reply.redirect('/busca/comprar');
	}
}

module.exports = search;
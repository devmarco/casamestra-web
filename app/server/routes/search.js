/* ------------------------------------ *\
	[SEARCH]
\* ------------------------------------ */

const search = {
	method: 'GET',
	path: '/busca',
	handler: (req, reply) => reply.redirect('/busca/comprar'),
};

module.exports = search;

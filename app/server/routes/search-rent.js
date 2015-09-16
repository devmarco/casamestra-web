/* ------------------------------------ *\
	[SEARCH RENT]
\* ------------------------------------ */

const searchRent = {
	method: 'GET',
	path: '/busca/alugar',
	handler: (req, reply) => {
		reply.view('search', {
			activePage: 'rent',
		});
	},
};

module.exports = searchRent;

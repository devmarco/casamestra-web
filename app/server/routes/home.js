/* ------------------------------------ *\
	[HOME]
\* ------------------------------------ */

const homeView = {
	method: 'GET',
	path: '/',
	handler: (req, reply) => reply.view('index'),
};

module.exports = homeView;

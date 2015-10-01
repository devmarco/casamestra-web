/* ------------------------------------ *\
	[USER]
\* ------------------------------------ */

const components = require('../config/components');

const homeView = {
	method: 'GET',
	path: '/user',
	config: {
		'auth': 'session',
	},
	handler: (req, reply) => {
		reply.view('user', {
			headerRender: components.header.get(),
		});
	},
};

module.exports = homeView;

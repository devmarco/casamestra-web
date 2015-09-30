/* ------------------------------------ *\
	[HOME]
\* ------------------------------------ */

const components = require('../config/components');

const homeView = {
	method: 'GET',
	path: '/',
	handler: (req, reply) => {
		reply.view('index', {
			headerRender: components.header.get(),
		});
	},
};

module.exports = homeView;

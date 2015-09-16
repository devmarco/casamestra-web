/* ------------------------------------ *\
	[PUBLIC FILES]
\* ------------------------------------ */

const Path = require('path');

const files = {
	method: 'GET',
	path: '/public/{path*}',
	handler: {
		directory: {
			path: Path.join(__dirname, '../../client', '/'),
			listing: false,
            index: false,
            redirectToSlash: false,
		},
	},
};

module.exports = files;

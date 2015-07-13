/*------------------------------------ *\
	[PUBLIC FILES]
\*------------------------------------*/

var Path = require('path');

var files = {
	method: 'GET',
	path: '/public/{path*}',
	handler: {
		directory: {
			path: Path.join(__dirname, '..', 'public'),
			listing: false,
            index: false,
            redirectToSlash: false
		}
	}
}	

module.exports = files;
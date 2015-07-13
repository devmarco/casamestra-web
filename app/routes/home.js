/*------------------------------------ *\
	[HOME]
\*------------------------------------*/

var homeView = {
	method: 'GET',
	path: '/',
	handler: function(req, reply) {
		reply.view('index');
	}
}	

module.exports = homeView;
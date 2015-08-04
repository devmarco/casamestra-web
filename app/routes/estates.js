/*------------------------------------ *\
	[BUY]
\*------------------------------------*/

var buyView = {
	method: 'GET',
	path: '/comprar',
	handler: function(req, reply) {
		reply.view('estates');
	}
}	

module.exports = buyView;
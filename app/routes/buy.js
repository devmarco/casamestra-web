/*------------------------------------ *\
	[BUY]
\*------------------------------------*/

var buyView = {
	method: 'GET',
	path: '/comprar',
	handler: function(req, reply) {
		reply.view('comprar');
	}
}	

module.exports = buyView;
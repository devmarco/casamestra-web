/*------------------------------------ *\
	[ESTATE]
\*------------------------------------*/

var Estates = require('../config/tables').estates;

var estateView = {
	method: 'GET',
	path: '/imovel/{ecmid}',
	handler: function(req, reply) {
		Estates
			.get(req.params.ecmid)
			.run()
			.then(function(result) {
				if (result) {
					reply.view('estate', result);
				} else {
					reply.view('error');
				}
			}).error(function(err) {
				reply.view('error');
			});
	}
}	

module.exports = estateView;
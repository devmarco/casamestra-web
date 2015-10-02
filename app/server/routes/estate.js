/* ------------------------------------ *\
	[ESTATE]
\* ------------------------------------ */

const components 	= require('../config/components');
const Estates 		= require('../config/tables').estates;

const estateView = {
	method: 'GET',
	path: '/imovel/{ecmid}',
	handler: (req, reply) => {
		Estates
			.get(req.params.ecmid)
			.run()
			.then(result => {
				if (result) {
					reply.view('estate', {
						headerRender: components.header.getHome(),
						estate: result,
					});
				} else {
					reply.view('error');
				}
			}).error(() => reply.view('error'));
	},
};

module.exports = estateView;

/*------------------------------------*\
	[ROUTES]
\*------------------------------------*/

var routes = [
	require('../../app/routes/files'),
	require('../../app/routes/home'),
	require('../../app/routes/buy')
	//require('../../app/routes/agents/get-one'),
	//require('../../app/routes/agents/create'),
	//require('../../app/routes/agents/update'),
	//require('../../app/routes/agents/delete'),
	//require('../../app/routes/agents/upload'),
];

module.exports = {
	create: function(server) {
		var endpointValue,
			r = 0, i

		if (!server || !routes)
			throw new error('Routes: Server or Endpoints are not found');

		for (r; r < routes.length; r++) {
			endpointValue = routes[r];
			if (typeof endpointValue === 'object') {
				server.route({
					method: endpointValue.method,
					path: endpointValue.path,
					handler: endpointValue.handler,
					config: endpointValue.config || {}
				});
			}
		}
	}
}
/*------------------------------------*\
	[ROUTES]
\*------------------------------------*/

var routes = [
	require('../routes/files'),
	require('../routes/home'),
	require('../routes/search'),
	require('../routes/search-buy'),
	require('../routes/search-rent'),
	require('../routes/estate')
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

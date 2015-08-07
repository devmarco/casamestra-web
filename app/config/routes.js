/*------------------------------------*\
	[ROUTES]
\*------------------------------------*/

var routes = [
	require('../../app/routes/files'),
	require('../../app/routes/home'),
	require('../../app/routes/search'),
	require('../../app/routes/search-buy'),
	require('../../app/routes/search-rent'),
	require('../../app/routes/estate')
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
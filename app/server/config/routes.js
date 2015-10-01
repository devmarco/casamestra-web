/* ------------------------------------ *\
	[ROUTES]
\* ------------------------------------ */

const routes = [
	require('../routes/files'),
	require('../routes/home'),
	require('../routes/search'),
	require('../routes/search-buy'),
	require('../routes/search-rent'),
	require('../routes/estate'),
	require('../routes/user'),
];

const create = server => {
	if (!server || !routes) throw new Error('Routes: Server or Endpoints are not found');
	routes.forEach(endpoint => {
		if (typeof endpoint === 'object') {
			server.route({
				method: endpoint.method,
				path: endpoint.path,
				handler: endpoint.handler,
				config: endpoint.config || {},
			});
		}
	});
};

module.exports = { create };

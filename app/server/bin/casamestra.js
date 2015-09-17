require('babel/register')({
	blacklist: ['strict'],
	extensions: ['.js', '.jsx'],
});

const Hapi 		= require('hapi');
const routes 	= require('../config/routes');
const plugins 	= require('../config/plugins');
const Jade 		= require('jade');
const Vision 	= require('vision');
const Path 		= require('path');
const Inert 	= require('inert');
const internals = {};

// Create the server instance
internals.config = () => {
	const server = new Hapi.Server();
	// //Set the connection
	server.connection({
		host: '127.0.0.1',
		port: process.env.PORT || 3000,
		routes: {
			cors: true,
			files: {
				relativeTo: Path.join(__dirname, 'public'),
			},
		},
		router:	{
			stripTrailingSlash: true,
		},
	});

	server.register([Vision, Inert], err => {
		if (err) {
			throw err;
		}

		server.views({
			engines: {
				jade: Jade,
			},
			path: Path.join(__dirname, '../views'),
		});
	});

	server.ext('onPreResponse', (request, reply) => {
		if (!request.response.isBoom) {
			return reply.continue();
		}

		reply.view('error', request.response).code(request.response.output.statusCode);
	});

	// Bootstrap Hapi Server Plugins, passes the server object to the plugins
	plugins.init(server);

	// Expose routes
	routes.create(server);

	return {
		server: server,
	};
};

// Init the server instance
internals.init = () => {
	const server = internals.config().server;
	// Start the server
	server.start(() => {
		console.info('Info: ', 'Server running at: ', server.info.uri);
	});
};


module.exports = internals;

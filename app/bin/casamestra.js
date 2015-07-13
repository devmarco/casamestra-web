var Hapi 		= require('hapi');
var routes 		= require('../config/routes');
var plugins 	= require('../config/plugins');
var Jade 		= require('jade');
var Config 		= require('getconfig');
var Path 		= require('path');

var internals 	= {};

//Create the server instance
internals.config = (function() {
	var server = new Hapi.Server();

	// //Set the connection
	server.connection({
		host: '127.0.0.1',
		port: process.env.PORT || 3000,
		router: {
			stripTrailingSlash: true
		}
	});

	server.views({
		engines: {
			jade: Jade
		},
		relativeTo: __dirname,
		path: '../public/views',
		isCached: Config.getconfig.env === 'production'
	});

	server.ext('onPreResponse', function (request, reply) {

		if (!request.response.isBoom) {
			return reply.continue();
		}

		reply.view('error', request.response).code(request.response.output.statusCode);
	});

	// Bootstrap Hapi Server Plugins, passes the server object to the plugins
	plugins.init(server);
	
	//Expose routes
	routes.create(server);

	return {
		server: server
	};
}());

//Init the server instance
internals.init = function() {
	var server = this.config.server;

	//Start the server
	server.start(function() {
		console.info('Info: ', 'Server running at: ', server.info.uri);
	});
}


module.exports = internals;
const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');	
const inert = require('inert');
const vision = require('vision');


server.connection({
	host: 'localhost',
	port: 3000
});

server.register([
	{register: inert},
	{register: vision}
], (err) => {
	if (err) throw err; 
});

server.views({
    engines: { html: require('handlebars') },
    path: __dirname + '/views'
});

server.route(require('./routes'));

server.start((err) => {
	if (err) throw err;
	console.log('Server running at: ', server.info.uri);
})


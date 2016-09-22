const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');	
const inert = require('inert');
const mongojs = require('mongojs');

var db = mongojs('couponAPI',['coupons']);

var all = db.coupons.find( (err, docs) => {
    return docs;
});

console.log(all);

server.connection({
	host: 'localhost',
	port: 3000
});

server.register(inert, (err) => {
	if (err) throw err; 
});

server.route(require('./routes'));

server.start((err) => {
	if (err) throw err;
	console.log('Server running at: ', server.info.uri);
})


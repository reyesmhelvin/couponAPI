const Transaction = require('./handlers/transaction');
const Payment = require('./handlers/payment');
const Generate = require('./handlers/generate');

module.exports = [{
    path: '/transaction',
	method: 'GET',
	handler: Transaction.index
}, {
    path: '/api/generate',
	method: 'GET',
	handler: Generate.index
}, {
   path: '/payment',
	method: 'GET',
	handler: Payment.index	
}, {
   path: '/',
	method: 'GET',
	handler: (request, reply) => {
		reply('Coupon API - Copyright 2016');
	}
}, {
   path: '/{p*}',
	method: 'GET',
	handler: (request, reply) => {
		reply('404 Not Found!');
	}
}];

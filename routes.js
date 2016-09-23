const Transaction = require('./handlers/transaction');
const Payment = require('./handlers/payment');
const Generate = require('./handlers/generate');
const Success = require('./handlers/success');
const Joi = require('joi');

module.exports = [{
    path: '/transaction',
	method: 'GET',
	handler: Transaction.index
},{
    path: '/api/generate',
	method: ['GET', 'POST'],
	handler: Generate.index
}, {
   path: '/payment',
	method: ['GET', 'POST'],
	handler: Payment.index	
}, {
   path: '/success',
	method: 'GET',
	handler: Success.index
},{
   path: '/success',
	method: 'POST',
	handler: Success.index,
	config: {
        validate: {
            payload: Joi.object({
            	couponCode: Joi.string().max(36).required()
            })
            .options({allowUnknown: true})
        }
    }	
}, {
   path: '/',
	method: 'GET',
	handler: (request, reply) => {
		reply.view('home.html');
	}
}, {
   path: '/{p*}',
	method: 'GET',
	handler: (request, reply) => {
		reply('404 Not Found!');
	}
}];

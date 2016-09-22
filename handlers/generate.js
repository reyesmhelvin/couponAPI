const uuid = require('uuid');

exports.index = (request, reply) => {
	const couponCode = uuid.v1();
	reply.view('generate.html', {cc: transaction.couponCode});
};
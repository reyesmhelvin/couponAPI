const uuid = require('uuid');

exports.index = (request, reply) => {
	const transactionID = request.payload.transId;
	const couponCode = uuid.v1();
	reply.view('generate.html', { cc: couponCode, id: transactionID });
};

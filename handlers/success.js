const mongojs = require('mongojs');
const dbcoup = mongojs('couponAPI',['coupons']);
const dbtrans = mongojs('couponAPI',['transactions']);

exports.index = (request, reply) => {
	const couponCode = request.payload.couponCode;
	const transId = request.payload.transId;
	
	dbtrans.transactions.findAndModify({ 
		query: { _id: mongojs.ObjectId(transId ) },
		update: { $set: { stat: false }}  
	}, (err) => { if (err) throw err; });

	dbcoup.coupons.findAndModify({ 
		query: { code: couponCode },
		update: { $set: { used: true }}  
	}, (err) => { if (err) throw err; });

	reply.view('success.html');
};
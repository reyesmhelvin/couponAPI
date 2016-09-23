const mongojs = require('mongojs');
const dbcoup = mongojs('couponAPI',['coupons']);
const dbtrans = mongojs('couponAPI',['transactions']);

exports.index = (request, reply) => {
	const couponCode = request.payload.couponCode;
	const transId = request.payload.transId;

	dbcoup.coupons.insert({ code: couponCode, used: false });

	dbcoup.coupons.findOne({ code: couponCode}, (err, docs) => {
		if (err) {
            return reply('Internal MongoDB error');
        }

		dbtrans.transactions.findAndModify({ 
			query: { _id: mongojs.ObjectId(transId) },
			update: { $set: { coupon_id: docs._id }}  
		}, (err) => { if (err) throw err; }); 
		
		reply.view('payment.html', { cc: couponCode , transId: transId});
	});

	
};
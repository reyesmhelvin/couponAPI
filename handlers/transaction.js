const mongojs = require('mongojs');
const db = mongojs('couponAPI',['transactions']);
const uuid = require('uuid');

exports.index = (request, reply) => {
	const couponCode = uuid.v1();


	db.transactions.find({stat: true},(err, docs) => {
		if (err) {
            return reply('Internal MongoDB error');
        }
        const randomizer = Math.floor(Math.random()*docs.length)
		const randomID = docs[randomizer];
		reply.view('transaction.html', { id: randomID });
	});
	
};


const mongojs = require('mongojs');
const db = mongojs('couponAPI',['transactions']);

exports.index = (request, reply) => {
	db.transactions.find({stat: true},(err, docs) => {
		if (err) {
            return reply('Internal MongoDB error');
        }

        const randomizer = Math.floor(Math.random()*docs.length)
		const randomID = docs[randomizer];

		reply.view('transaction.html', { id: randomID });
	});
	
};


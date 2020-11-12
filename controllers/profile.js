const handleProfile = (req, res, db) => {
	const { id } = req.params;
	foundUser = false;
	
	db.transaction(trx => {
		trx("users")
		.select('*')
		.where({id})
		.returning('*')
		.then(user => {
			return trx("usercomments")
				.where({userid: user[0]["id"]})
				.select("commenttext")
				.then(txts => {
					let num = 1;
					txts.map((cmt) => {
						user[0][`comment${num}`] = cmt["commenttext"];
						num++;
					})
					res.json(user[0]);
				})
		})
		.then(trx.commit)
      	.catch(trx.rollback)
	})
	.catch(err => res.status(400).json('Unable to find user profile!'));
}

module.exports = {
	handleProfile: handleProfile
};
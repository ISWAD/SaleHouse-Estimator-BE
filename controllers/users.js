const handleUsers = (req, res, db) => {
	db.select('*').from('users')
	.then(Users => {
		res.json(Users);
	})
};

module.exports = {
	handleUsers: handleUsers
};
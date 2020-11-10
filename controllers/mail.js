const handleMail = (req, res, db) => {
	mails = [];
	db.users.map((user) => {
		mails.push(user.email)
	})
	res.json(mails);
}

module.exports = {
	handleMail: handleMail
};
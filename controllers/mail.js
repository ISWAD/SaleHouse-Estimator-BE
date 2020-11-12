const handleMail = (req, res, db) => {
	let mails = [];
	db.select('email').from('users')
		.then(mail => {
			res.json(mail);
		})
		.catch(err => {
			res.status(400).json("Something is wrong; please try later!")
		})
}

module.exports = {
	handleMail: handleMail
};
const handleRegister = (req, res, db, bcrypt) => {
	const { firstName, lastName, email, password } = req.body;
	let registered = false;

	db.select('email').from('users').where({email})
		.then(mail => {
			if (mail.length > 0) {
				registered = true;
				res.json("The email address has already been registered!");
			}
		})
		.catch(err => {
			res.json("Something is wrong; please try later");
		})
	
	if (! registered) {
		db('users')
		.insert({
			firstname: firstName,
			lastname: lastName,
			email: email,
			hash: bcrypt.hashSync(password),
			joined: new Date()
		})
		.returning('*')
		.then(user => {
			res.json(user[0]);
		})
		.catch(err => {
			res.json("Something is wrong; please try later!")
		})
	}
}

module.exports = {
	handleRegister: handleRegister
};
const handleRegister = (req, res, db, bcrypt) => {
	const { firstName, lastName, email, password } = req.body;
	let registered = false;
	db.users.map((user) => {
		if (user.email === email) {
			registered = true;
			res.json("alreadyRegistered")
		}
	})
	if (! registered) {
		db.users.push({
			id: '3',
        	firstName: firstName,
        	lastName: lastName,
        	email: email,
        	password: bcrypt.hashSync(password),
        	commentsNum: 0,
        	joined: new Date()
		})
		res.json(db.users[db.users.length - 1]);
	}
}

module.exports = {
	handleRegister: handleRegister
};
const handleLogin = (req, res, db, bcrypt) => {
	const { email, password } = req.body;
	let userFound = false;
	db.users.map((user) => {
		if (user.email === email) {
			userFound = true;
			const isValid = bcrypt.compareSync(password, user.password);
			if (isValid) {
				req.session
				res.json(user);
			} else {
				res.json("PasswordError")
			}
		}
	});
	if (! userFound) {
		res.json("EmailError");
	}
}

module.exports = {
	handleLogin: handleLogin
};
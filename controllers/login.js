const handleLogin = (req, res, db, bcrypt) => {
	const { email, password } = req.body;
	db.select('*').from('users').where({email})
		.then(user => {
			if (user.length > 0) {
				const isValid = bcrypt.compareSync(password, user[0]['hash']);
				if (isValid) {
					res.json(user[0]);
				} else {
					res.json("PasswordError");
				}
			} else {
				res.json("EmailError");
			}
		})
		.catch(err => {
			res.status(400).json("Something is wrong; please try later!");
		})
	// db.users.map((user) => {
	// 	if (user.email === email) {
	// 		userFound = true;
	// 		const isValid = bcrypt.compareSync(password, user.password);
	// 		if (isValid) {
	// 			req.session
	// 			res.json(user);
	// 		} else {
	// 			res.json("PasswordError")
	// 		}
	// 	}
	// });
	// if (! userFound) {
	// 	res.json("EmailError");
	// }
}

module.exports = {
	handleLogin: handleLogin
};
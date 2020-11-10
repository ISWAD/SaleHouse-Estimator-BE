const handleProfile = (req, res, db) => {
	const { id } = req.params;
	foundUser = false;
	db.users.map((user) => {
		if (user.id === id) {
			foundUser = true;
			res.json(id);
		}
	});
	if (! foundUser) {
		res.json("Not Found");
	}
	res.json(mails);
}

module.exports = {
	handleProfile: handleProfile
};
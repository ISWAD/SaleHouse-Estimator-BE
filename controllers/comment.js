const handleComment = (req, res, db) => {
	const { id, commentsNum } = req.body;
	foundUser = false;
	db.users.map((user) => {
		if (user.id === id) {
			foundUser = true;
			user.commentsNum++;
			res.json(user.commentsNum);
		}
	});
	if (! foundUser) {
		res.json("Not Found");
	}
}

module.exports = {
	handleComment: handleComment
};
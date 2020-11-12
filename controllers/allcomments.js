const handleAllComments = (req, res, db) => {
	db.select('*').from('usercomments')
	.then(cmts => {
		res.json(cmts);
	})
};

module.exports = {
	handleAllComments: handleAllComments
};
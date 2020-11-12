const handleComment = (req, res, db) => {
	const { userid, commenttext } = req.body;
	foundUser = false;

	db.transaction(trx => {
      trx('usercomments').insert({
        userid: userid,
        commenttext: commenttext
      })
      .returning('userid')
      .then(Uid => {
       	return trx('users').where({id: Uid[0]})
        	.increment('commentsnum', 1)
        	.returning('commentsnum')
          	.then(num => {
            	res.json(num);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('Unable to send your comment!'));
}

module.exports = {
	handleComment: handleComment
};
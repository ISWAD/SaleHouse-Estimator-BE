const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send("This is working!")
})

app.listen(process.env.PORT || 4000, () => {
	console.log(`app is running on port ${process.env.PORT}`);
})
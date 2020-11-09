const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const database = {
	users: [
    	{
        	id: '1',
        	firstName: "Mohammad",
        	lastName: "Mohajer",
        	email: "mmmohajer70@gmail.com",
        	password: "123456",
        	comments: 0,
        	joined: new Date()
        },
        {
        	id: '2',
        	firstName: "Amin",
            lastName: "Nouri",
            email: "am_nouri@gmail.com",
            password: "78910",
            comments: 0,
            joined: new Date()
        }
    ]
};

app.get('/', (req, res) => {
	res.send("This is working!")
})

app.post('/login', (req, res) => {
	if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
		res.json('Success, user logged in');
	} else {
		res.status(400).json("Error logging in");
	}
})

app.listen(process.env.PORT || 4000, () => {
	console.log(`app is running on port ${process.env.PORT}`);
})
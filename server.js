const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');
const cors = require('cors');

const profile = require('./controllers/profile');
const login = require('./controllers/login');
const mail = require('./controllers/mail');
const register = require('./controllers/register');
const comment = require('./controllers/comment');

const db = {
	users: [
    	{
        	id: '1',
        	firstName: "Mohammad",
        	lastName: "Mohajer",
        	email: "mmmohajer70@gmail.com",
        	password: bcrypt.hashSync("123456"),
        	commentsNum: 0,
        	joined: new Date()
        },
        {
        	id: '2',
        	firstName: "Amin",
            lastName: "Nouri",
            email: "am_nouri@gmail.com",
            password: bcrypt.hashSync("78910"),
            commentsNum: 0,
            joined: new Date()
        }
    ],
    comments: [
    	{}
    ]
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { res.send('Server is working') });
app.post('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) });
app.post('/login', (req, res) => { login.handleLogin(req, res, db, bcrypt) });
app.get('/mail/', (req, res) => { mail.handleMail(req, res, db) });
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });
app.post('/comment', (req, res) => { comment.handleComment(req, res, db) });

app.listen(process.env.PORT || 4000);
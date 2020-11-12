const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const login = require('./controllers/login');
const mail = require('./controllers/mail');
const register = require('./controllers/register');
const comment = require('./controllers/comment');

const users = require('./controllers/users');
const allcomments = require('./controllers/allcomments');
const profile = require('./controllers/profile');


const db = knex({
	client: 'pg',
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false
		}
	}
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { res.send('Server is working') });
app.post('/login', (req, res) => { login.handleLogin(req, res, db, bcrypt) });
app.get('/mail/', (req, res) => { mail.handleMail(req, res, db) });
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });
app.post('/comment', (req, res) => { comment.handleComment(req, res, db) });

app.get('/users', (req, res) => { users.handleUsers(req, res, db) });
app.get('/allcomments', (req, res) => { allcomments.handleAllComments(req, res, db) });
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) });

app.listen(process.env.PORT || 4000);
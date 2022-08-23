const express = require('express');
const app = express();
const { connection } = require('./application')

const { createUser, getuserByUserId, getUserByOrgId, getAllUsers } = require("./apis/users");

app.use(express.json())

connection.connect()

// ROUTES
app.get('/users', (req, res) => { getAllUsers(req, res) });
app.post('/users', (req, res) => { createUser(req, res) });
app.get('/users/:id', (req, res) => { getuserByUserId(req, res) });
app.get('/users/org/:orgId', (req, res) => { getUserByOrgId(req, res) });


app.listen(3000, () => console.log("Running"));
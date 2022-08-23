const express = require('express');
const app = express();
const { connection } = require('./application')

const { createUser, getuserByUserId, getUserByOrgId, getAllUsers } = require("./apis/users");
const { createComponent,getAllComponents, getComponentById } = require("./apis/original_components");
app.use(express.json())

connection.connect()

app.get('/users', (req, res) => { getAllUsers(req, res) });
app.post('/users', (req, res) => { createUser(req, res) });
app.get('/users/:id', (req, res) => { getuserByUserId(req, res) });
app.get('/users/org/:orgId', (req, res) => { getUserByOrgId(req, res) });
// app.get('/original_components/:id[p]',(req,res)=>{ getComponentById(req,res)});

app.get('/original_components',(req,res)=>{ getAllComponents(req,res) });
app.post('/original_components', (req, res) => { createComponent(req, res) });
app.get('/original_components/:id',(req,res)=>{ getComponentById(req,res) });

app.listen(3000, () => console.log("Running"));
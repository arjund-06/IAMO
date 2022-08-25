const express = require('express');
const app = express();
// const { connection } = require('./application')

const { createUser, getuserByUserId, getUserByOrgId, getAllUsers } = require("./apis/users");
const { createOriginalComponent, getAllOriginalComponents, getOriginalComponentById } = require("./apis/original_components");
const { createUpdatedComponent, getUpdatedComponentById, getAllUpdatedComponents } = require("./apis/updated_components");
const { getAllUpdateLogs, createUpdateLog, getUpdateLogByDeviceId } = require('./apis/update_log');

const PORT = process.env.PORT || 3000;

app.use(express.json())

// connection.connect()

// ROUTES
app.get('/users', (req, res) => { getAllUsers(req, res) });
app.post('/users', (req, res) => { createUser(req, res) });
app.get('/users/:id', (req, res) => { getuserByUserId(req, res) });
app.get('/users/org/:orgId', (req, res) => { getUserByOrgId(req, res) });
// app.get('/original_components/:id[p]',(req,res)=>{ getComponentById(req,res)});

app.get('/original_components', (req, res) => { getAllOriginalComponents(req, res) });
app.post('/original_components', (req, res) => { createOriginalComponent(req, res) });
app.get('/original_components/:id', (req, res) => { getOriginalComponentById(req, res) });

app.get('/updated_components', (req, res) => { getAllUpdatedComponents(req, res) });
app.post('/updated_components', (req, res) => { createUpdatedComponent(req, res) });
app.get('/updated_components/:id', (req, res) => { getUpdatedComponentById(req, res) });

app.get('/update_log', (req, res) => { getAllUpdateLogs(req, res) });
app.post('/update_log', (req, res) => { createUpdateLog(req, res) });
app.get('/update_log/:device_id', (req, res) => { getUpdateLogByDeviceId(req, res) });

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
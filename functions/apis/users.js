const { connection } = require('../application')
const { prisma } = require("../application")

/*
const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  
  const users = await prisma.user.findMany()
*/

exports.createUser = async function(req, res) {
    uid = "cfgnggdg"
    console.log("PARAMS", req.params);
    console.log("BODY", req.body);
    // const newUser = {
    //     name: req.body.name,
    //     id: uid,
    //     orgId: req.body.orgId,
    //     email: req.body.email,
    // };

    const newUser = await prisma.users.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            id: uid,
            orgId: req.body.uid,
        },
    });

    // connection.query(`INSERT INTO users SET ?`, newUser, function(error, results, fields) {
    //     if (error) throw error;
    //     r = results;
    //     res.send({ r: r, data: newUser });
    //     return;
    // });
}

exports.getAllUsers = async function(req, res) {
    // let r;
    console.log("PARAMETERS", req.params);
    console.log("BODY", req.body);

    const r = await prisma.users.findMany()
    res.send(r);
    // connection.query('SELECT * FROM users', function(error, results, fields) {
    //     if (error) throw error;
    //     r = results;
    //     // res.send(`The solution is: ${r} feilds, ${fields}`);
    //     // console.log("R", r);
    //     res.send(r);
    //     return;
    // });
}

exports.getuserByUserId = async function(req, res) {
    // let r;
    console.log("PARAMETERS", req.params);
    const r = await prisma.users.findMany({
        where: {
            OR: [{ id: { contains: req.params.id } }]
        }
    })
    res.send(r);
    // connection.query(`SELECT * FROM users where id = '${req.params.id}'`, function(error, results, fields) {
    //     if (error) throw error;
    //     r = results;
    //     res.send(r);
    //     return;
    // });
}

exports.getUserByOrgId = async function(req, res) {
    // let r;

    const r = await prisma.users.findMany({
        where: {
            OR: [{ orgId: { contains: req.params.orgId } }]
        }
    })
    res.send(r);

    // connection.query(`SELECT * FROM users where orgId = '${req.params.orgId}'`, function(error, results, fields) {
    //     if (error) throw error;
    //     r = results;
    //     res.send(r);
    //     return;
    // });
}
const { prisma, cors } = require("../application")

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
    await cors(req, res, async() => {

        uid = "dfsdbivsbdvsib"
        console.log("PARAMS", req.params);
        console.log("BODY", req.body);

        const newUser = await prisma.users.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                id: uid,
                orgId: req.body.orgId,
            },
        });

        res.send(newUser);
    });
}

exports.getAllUsers = async function(req, res) {
    await cors(req, res, async() => {
        // let r;
        console.log("PARAMETERS", req.params);
        console.log("BODY", req.body);

        const r = await prisma.users.findMany()
        res.send(r);
    });
}

exports.getuserByUserId = async function(req, res) {
    await cors(req, res, async() => {
        // let r;
        console.log("PARAMETERS", req.params);
        const r = await prisma.users.findMany({
            where: {
                OR: [{ id: { contains: req.params.id } }]
            }
        })
        res.send(r);
    });
}

exports.getUserByOrgId = async function(req, res) {
    await cors(req, res, async() => {
        // let r;
        const r = await prisma.users.findMany({
            where: {
                OR: [{ orgId: { contains: req.params.orgId } }]
            }
        })
        res.send(r);
    });
}
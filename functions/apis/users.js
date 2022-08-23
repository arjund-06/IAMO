const { connection } = require('../application')

exports.createUser = function(req, res) {
    uid = "ljnjdsgj"
    const newUser = {
        name: req.body.name,
        id: uid,
        orgId: req.body.orgId,
        email: req.body.email,
    };
    connection.query(`INSERT INTO users SET ?`, newUser, function(error, results, fields) {
        if (error) throw error;
        r = results;
        res.send({ r: r, data: newUser });
        return;
    });
}

exports.getAllUsers = function(req, res) {
    let r;
    connection.query('SELECT * FROM users', function(error, results, fields) {
        if (error) throw error;
        r = results;
        // res.send(`The solution is: ${r} feilds, ${fields}`);
        // console.log("R", r);
        res.send(r);
        return;
    });
}

exports.getuserByUserId = function(req, res) {
    let r;
    connection.query(`SELECT * FROM users where id = '${req.params.id}'`, function(error, results, fields) {
        if (error) throw error;
        r = results;
        res.send(r);
        return;
    });
}

exports.getUserByOrgId = function(req, res) {
    let r;
    connection.query(`SELECT * FROM users where orgId = '${req.params.orgId}'`, function(error, results, fields) {
        if (error) throw error;
        r = results;
        res.send(r);
        return;
    });
}


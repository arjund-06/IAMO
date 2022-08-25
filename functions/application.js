const mysql = require('mysql');
const { PrismaClient } = require('@prisma/client')

exports.cors = require("cors")({ origin: true });

exports.prisma = new PrismaClient()


// exports.connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'iamo'
// })
var mysql = require('mysql2');

var conn = mysql.createConnection({
    host: "18.228.119.16",
    user: "nodejs",
    password: "4fAJs3i8d",
    database: "vaga"
})

conn.connect(function (err) {
    if (err) throw err
})

module.exports = conn

var mysql = require('mysql2');




var conn = mysql.createConnection({

    host: process.env.host,

    user: process.env.user,

    password: process.env.password,

    database: process.env.database

})




conn.connect(function (err) {

    if (err) throw err

})




module.exports = conn

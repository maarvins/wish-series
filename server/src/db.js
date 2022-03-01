var mysql = require('mysql');

require('dotenv').config();

var conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

conn.connect(function(err) {
    if (err) return console.error("err: ", err)

    var sql1 = "INSERT INTO categories (category) VALUES ('Drama')";
    var sql2 = "SELECT * FROM categories";
    
    conn.query(sql2, function (err, result, fields) {
        if (err) return console.error('err: ', err)

        console.log("data: ", result)
    })

})
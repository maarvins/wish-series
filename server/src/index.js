const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const conn = require('./db.js')

app.get("/get_name", (_, res) => {
    let sql = "SELECT * FROM series";

    conn.query(sql, function (err, result) {
        if (err) throw err;
        res.json(JSON.parse(JSON.stringify(result)))
    });
    conn.end();
})

app.get("/get_years", (_, res) => {
    let sql = "SELECT * FROM years";

    conn.query(sql, function (err, result) {
        if (err) throw err;
        res.json(JSON.parse(JSON.stringify(result)))
    });
    conn.end();
})

app.get("/get_categories", (_, res) => {
    let sql = "SELECT * FROM categories";

    conn.query(sql, function (err, result) {
        if (err) throw err;
        res.json(JSON.parse(JSON.stringify(result)))
    });
    conn.end();
})

app.get("/getCards", (req, res) => {

    let SQL = "SELECT * from series"

    conn.query(SQL, (err, result) => {
        if (err) console.log(err)
        else JSON.parse(result)
    })
})

app.post("/register", (req, res) => {
    const { name, fk_year, seasons, synopse, fk_category } = req.body

    var sql = "INSERT INTO series (name, fk_year, seasons, synopse, fk_category) VALUES (?,?,?,?,?)";

    conn.query(sql, [name, fk_year, seasons, synopse, fk_category], (err, result) => {
        if (err) console.log(err)
        console.log(result)
        res.send(result)
    })

    conn.end();
})


app.listen(3001, () => {
    console.log("Rodando servidor na porta 3001")
})
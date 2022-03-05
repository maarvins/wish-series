const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const conn = require('./db.js')

app.get("/get_years", (_, res) => {
    let sql = "SELECT * FROM years";

    conn.query(sql, function (err, result) {
        if (err) throw err;
        res.json(JSON.parse(JSON.stringify(result)))
    });
})

app.get("/get_categories", (_, res) => {
    let sql = "SELECT * FROM categories";

    conn.query(sql, function (err, result) {
        if (err) throw err;
        res.json(JSON.parse(JSON.stringify(result)))
    });
})


app.post("/register", (req, res) => {
    console.log(req.body)
    const { name, fk_year, seasons, synopse, fk_category } = req.body

    var sql = `
    INSERT INTO series (name, fk_year, seasons, synopse, fk_category) 
    VALUES ("${name}",${fk_year},${seasons},"${synopse}",${fk_category})`;

    conn.query(sql, (err, result) => {
        if (err) console.log(err)
        res.json({ success: true })
    })
})

app.get("/get_series", (req, res) => {
    var sql = `
    SELECT s.id, name, y.year, seasons, synopse, c.category
    FROM series s
    LEFT JOIN years y ON (fk_year = y.id)
    LEFT JOIN categories c ON (fk_category = c.id)
    ORDER BY id DESC
    `;

    conn.query(sql, function (err, result) {
        if (err) throw err;
        else res.json(JSON.parse(JSON.stringify(result)))
    });
})

app.put("/edit", (req, res) => {
    const { id, name, fk_year, seasons, synopse, fk_category } = req.body

    let SQL = `UPDATE series SET name = ${name}, year = ${fk_year}, seasons = ${seasons}, synopse = ${synopse}, category = ${fk_category}, WHERE id = ${id}`

    conn.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params

    let SQL = `DELETE FROM series WHERE id = ${id}`

    conn.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.listen(3001, () => {
    console.log("Rodando servidor na porta 3001")
})
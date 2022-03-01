const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.post("/register", (req,res) => {
    const {name} = req.body
    const {year} = req.body
    const {seasons} = req.body
    const {synopsis} = req.body
    const {category} = req.body
    
})

app.listen(3001, () => {
    console.log("Rodando servidor na porta 3001")
})
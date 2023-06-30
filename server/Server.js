const express = require("express")
const env = require("dotenv")
env.config()
const app = express()
const PORT = process.env.PORT

app.get("/", (req,res) => {
    res.send("From Backend")
})

app.listen(PORT,console.log(`Server is Started on ${PORT}`))
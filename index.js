const express = require('express')

const app = express()


const booksnames = require("./books")


app.get("", (req, res) => {

    return res.send("hello")

})

app.get("/books", (req, res) => {

    return res.send(booksnames())

})


app.listen(4112, () => {

    console.log('listening on port 4112')

})

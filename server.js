const express = require('express')
const app = new express()
const users = []

//serve client side files(will give them the public folder)
app.use(express.static('public'))

app.post("/login", (req, res) => {
    users.push(req.body)
})

app.listen(3000, () => console.log("server started"))
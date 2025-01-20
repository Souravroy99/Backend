require('dotenv').config()
const express = require("express")
const app = express()

app.get('/', (req,res) => {
    res.send(`GET at: ${PORT}`)
})


app.get('/xyz', (req,res) => {
    res.send(`GET XYZ at: ${PORT}`)
})
 

const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`)
}) 
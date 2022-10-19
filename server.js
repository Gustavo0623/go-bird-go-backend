// DEPENDENCIES
const express = require ('express')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/api', (req, res) => {
    res.json({"projPlacement": ["high", "low", "random", "random"]})
})

// LISTEN
app.listen(process.env.PORT, () => { console.log(`Server started on port ${process.env.PORT}`)})
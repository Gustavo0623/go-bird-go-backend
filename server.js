// DEPENDENCIES
const express = require ('express')
const app = express()
const { Sequelize } = require('sequelize')




// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)
try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Go-Bird-Go'
    })
})

// CONTROLLERS
const mapsController = require('./controllers/map_controller')

app.use('/maps', mapsController)

// LISTEN
app.listen(process.env.PORT, () => { console.log(`Server started on port ${process.env.PORT}`)})
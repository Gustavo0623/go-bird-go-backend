// DEPENDENCIES
const maps = require('express').Router()
const db = require('../models')
const { Map } = db 

// FIND ALL MAPS
maps.get('/', async (req, res) => {
    try {
        const foundMaps = await Map.findAll({
            attributes: ['id','Map_Name','Projectiles_placement', 'Coins_placement']
        })
        res.status(200).json(foundMaps)
        console.log('all good!')
    } catch (error) {
        console.log('test')
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC MAP
maps.get('/:id', async (req, res) => {
    try {
        const foundMap = await Map.findOne({
            where: { id: req.params.id },
            attributes: ['Map_Name','Projectiles_placement', 'Coins_placement']
        })
        res.status(200).json(foundMap)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A MAP
maps.post('/new-map', async (req, res) => {
    try {
        const newMap = await Map.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new map',
            data: newMap
        })
    } catch(err) {
        console.log(req.body)
        res.status(500).json(err)
    }
})

// UPDATE A MAP
maps.put('/:id', async (req, res) => {
    try {
        const updatedMaps = await Map.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedMaps} map(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A MAP
maps.delete('/:Map_Name', async (req, res) => {
    try {
        const deletedMaps = await Map.destroy({
            where: {
                Map_Name: req.params.Map_Name
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedMaps} map(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = maps
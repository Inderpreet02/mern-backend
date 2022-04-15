const express = require('express');
const router = express.Router();
const PlantsModel = require('../models/Plants');

const createPlant = () => {

    const plant = new PlantsModel(req.body);

    plant.save((error, result) => {

        if(error){
            return res.status(400).json({
                error
            })
        }

        if(result){
            return res.status(200).json({
                result
            })
        }
    })
}

router.post('/createPlant', (req, res) => {
    
    const plant = new PlantsModel(req.body);

    plant.save((error, result) => {

        if(error){
            return res.status(400).json({
                error
            })
        }

        if(result){
            return res.status(200).json({
                result
            })
        }
    })
})

module.exports = {
    createPlant
}
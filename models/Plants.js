const mongoose = require('mongoose')

const PlantsSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
}, {timestamps: true})

const PlantsModel = mongoose.model("plants", PlantsSchema);

module.exports = PlantsModel;
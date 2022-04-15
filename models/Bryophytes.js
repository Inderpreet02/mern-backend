const mongoose = require('mongoose')

const Bryophytes = new mongoose.Schema({
    
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
        type: String,
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

const BryophytesModel = mongoose.model("bryopytes", Bryophytes);

module.exports = BryophytesModel;
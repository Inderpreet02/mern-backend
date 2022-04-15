const mongoose = require('mongoose')

const Gymnosperm = new mongoose.Schema({
    
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

const GymnospermModel = mongoose.model("gymnosperm", Gymnosperm);

module.exports = GymnospermModel;
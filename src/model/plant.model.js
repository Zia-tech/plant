
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    plantName: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
    
});
module.exports= mongoose.model('Plant',plantSchema);
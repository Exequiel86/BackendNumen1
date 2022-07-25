const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    marca: {
        type: String,
        required: true,
        unique: true,
    },
    
    bodega: {
        type: String,
        required: true,
    },

    age: {  
        type: String,
        required: true,
    },

    varietal: {
        type: String,
        required: true,
    },

    precio: {
        type: String,
        required: true,
    },
});

const Wine = mongoose.model('Wine', storeSchema);

module.exports = {Wine}
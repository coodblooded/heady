const mongoose = require('mongoose')

const { Schema } = mongoose

const productModel = new Schema (
    {
    name: { type: String },
    details: { type: String },
    price: { type: Number}
    }
);

module.exports = mongoose.model('Products', productModel)

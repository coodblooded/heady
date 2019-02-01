const mongoose = require('mongoose')

const { Schema } = mongoose

const categoryModel = new Schema (
    {
    name: { type: String },
    child_categories: { type: Array },
    products: { type: Array}
    }
);

module.exports = mongoose.model('Category', categoryModel)

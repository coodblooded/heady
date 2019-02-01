const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = mongoose.connect('mongodb://localhost/heady', { useNewUrlParser: true })
const app = express()
const Products = require('./models/productModel')
const Category = require('./models/categoryModel')
const productRouter = require('./routes/productRoutes')(Products, Category)
const categoryRouter = require('./routes/categoryRoutes')(Category, Products)
const port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api', productRouter)
app.use('/api', categoryRouter)
app.get('/', (req, res) => {
    res.send("Welcome to my RESTAPi")
})


app.listen(port, () => {
    console.log(`Server is runing on ${port}`)
})
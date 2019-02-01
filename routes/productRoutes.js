const express = require('express')

function routes(Products, Category) {
    const productRouter = express.Router()
    productRouter.route('/product')
        .get((req, res) => {
            const query = {}
            if (req.query.name) {
                query.name = req.query.name
            }
            Products.find(query, (err, products) => {
                if (err) {
                    return res.send(err)
                }
                return res.json(products)
            })
        })
        .post((req, res) => {
            const product = new Products(req.body)
            product.save()
            const product_id = product._id
            const query = {}
            if (req.query.name) {
                query.name = req.query.name
            }
            Category.findOneAndUpdate(query, {$push: {products: product_id}}, {new: true}, (err, category) => {
                if (err) {
                    return res.send(err)
                }
            })
            return res.status(201).json(product)
        })
    
    productRouter.use('/product/:pId', (req, res, next) => {
        Products.findById(req.params.pId, (err, product) => {
            if (err) {
                return res.send(err)
            }
            if (product) {
                req.product = product
                return next()
            }
            return res.statusCode(400)
        })
    })
    productRouter.route('/product/:id')
        .get((req, res) => res.json(req.product))
        .patch((req, res) => {
            const { product } = req
            if (req.body._id) {
                delete req.body._id
            }
            Object.entries(req.body).forEach((item) => {
                const key = item[0]
                const value = item[1]
                product[key] = value
            })
            req.product.save( (err) => {
                if (err) {
                    return res.send(err)
                }
                return res.json(product)
            })
        })
    return productRouter;
}


module.exports = routes
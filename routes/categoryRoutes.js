const express = require('express')

function routes(Category, Products) {
    const categoryRouter = express.Router()
    categoryRouter.route('/category')
        .get((req, res) => {
            const query = {}
            if (req.query.name) {
                query.name = req.query.name
            }
            Category.find(query, (err, Category) => {
                if (err) {
                    return res.send(err)
                }
                return res.json(Category)
            })
        })
        .post((req, res) => {
            const catetory = new Category(req.body)
            catetory.save()
            const catetory_id = catetory._id
            const query = {}
            if (req.query.name) {
                query.name = req.query.name
            }
            Category.findOneAndUpdate(query,{$push: {child_categories: catetory_id}}, {new: true}, (err, category) => {
                if (err) {
                    return res.send(err)
                }
            })
            return res.status(201).json(catetory)
        })

    categoryRouter.route('/category/:id')
        .get((req, res) => {
            Category.findById(req.params.id, (err, category) => {
                if (err) {
                    return res.send(err)
                }
               Products.find({_id : { $in: category.products}}, (err, product) => {
                    return res.json(product) 
               })
               
            })
        })


    return categoryRouter;
}


module.exports = routes

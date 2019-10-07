
const { Router } = require('express')
const Product = require('./model')
const router = new Router()
const auth = require('../auth/middleware')

router.get('/products', (req, res, next) => {
  Product.
    findAll()
    .then(productList => res.json(productList))
    .catch(next)
})

router.get('/products/:id', (req, res, next) => {
  console.log("ID?", req.params.id)
  Product
    .findByPk(req.params.id)
    .then(product => res.json(product))
    .catch(next)
})

router.post('/products', auth, (req, res, next) => {
  Product
    .create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(next)
})

router.put('/products/:id', (req, res, next) => {
  Product
    .findByPk(req.params.id)
    .then(product => product.update(req.body))
    .then(product => res.status(201).send(product))
    .catch(next)
})

router.delete('/products/:id', (req, res, next) => {
  Product
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      return res.status(204).end()
    })
    .catch(next)
})



module.exports = router;
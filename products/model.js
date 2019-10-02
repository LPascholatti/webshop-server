const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('products', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  imageURL: Sequelize.STRING,
  email: Sequelize.STRING,
  sellerAddress: Sequelize.STRING
})

module.exports = Product;
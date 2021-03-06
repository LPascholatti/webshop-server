const Sequelize = require('sequelize')
const sequelize = require('../db')

const Comment = sequelize.define(
  'comment',
  {
    author: 
    {
      type: Sequelize.STRING,
      allowNull: false
    },
    comment:
    {
      type: Sequelize.STRING,
      allowNull: false
    },
    productId: 
    {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }
)

module.exports = Comment;
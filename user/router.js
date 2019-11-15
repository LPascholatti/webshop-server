const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')
const router = new Router()

router.post('/user', (req, res, next) => {
  console.log('req.body.password/email', req.body.email, req.body.password, req.body.username, req.body.address)
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    address: req.body.address,
    username: req.body.username
  }

  User
    .create(user)
    .then(newUser => res.json(newUser))
    .catch(next)
})

module.exports = router;
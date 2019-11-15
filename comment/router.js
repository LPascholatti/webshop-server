const { Router } = require('express')
const Comment = require('./model')
const router = new Router()

router.get('/comment', (req, res, next) => {
  const limit = req.query.limit || 25
  const offset = req.query.offset || 0

  Comment
  .findAll({limit, offset})
  .then(allComments => res.json(allComments))
  .catch(next)
});

router.post('/comment', (req, res, next) => {
  Comment
  .create(req.body)
  .then(newComment => res.status(201).json(newComment))
  .catch(next)
});

module.exports = router;
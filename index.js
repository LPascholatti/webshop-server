const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const middleware = cors()
const jsonParser = bodyParser.json()
const port = process.env.PORT || 4000
const productsRouter = require('./products/router')

app.use(jsonParser)
app.use(middleware)
app.use(productsRouter)

app.get('/', (req, res) => res.send('Welcome to Buy & Sell API'))
app.listen(port, () => console.log(`Example App listening on port ${port}`))
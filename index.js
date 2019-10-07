const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const middleware = cors()
const jsonParser = bodyParser.json()
const port = process.env.PORT || 4000
const productsRouter = require('./products/router')
const userRouter = require('./user/router')
const authRouter = require('./auth/router')

app.use(jsonParser)
app.use(middleware)
app.use(productsRouter)
app.use(authRouter)
app.use(userRouter)

app.get('/', (req, res) => res.send('Welcome to Buy & Sell API'))
app.listen(port, () => console.log(`Example App listening on port ${port}`))
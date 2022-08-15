require('dotenv').config()
//async

const express = require('express')
const app = express()
const data = require('./products')
const products = require('./routes/products')

const notFound = require('./middleware/not-found')
const errorHanlder = require('./middleware/error-handler')
const connectDB = require('./db/connector')

//middlewares

app.use(express.json())

app.use('/api/v1/products', products)
//router

app.get('/', (req, res) => {
  res.send(`<h1>The Store API's</h1><a href="/api/v1/products">click here</a>`)
})

// start the server
app.use(errorHanlder)
app.use(notFound)

const start = async () => {
  try {
    //dbconnect
    await connectDB(process.env.MONGODB_URI)
    app.listen(process.env.PORT || 4000, () => {
      console.log(`starting the server on port :${process.env.PORT || 4000}`)
    })
  } catch (error) {
    console.log(`failed while starting the error reason:${error}`)
  }
}
start()

const connectDB = require('./db/connector')
require('dotenv').config()
const Product = require('./models/product')
const jsonProduct = require('./products.json')
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    await Product.deleteMany()
    await Product.create(jsonProduct)
    console.log('successfully populayed the data!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()

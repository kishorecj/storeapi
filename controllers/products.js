const Product = require('../models/product')
const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: 'Products Testing routes' })
}

const getAllProducts = async (req, res) => {
  console.log('reached the getallproducts controller')
  const products = await Product.find({})
  // console.log(products)
  res.status(200).json({ products, nbHits: products.length })
}

module.exports = { getAllProducts, getAllProductsStatic }

const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  name: {
    require: [true, 'Must contain product name'],
    type: String,
  },
  price: {
    require: [true, 'Must contain product price'],
    type: Number,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
  },
})

module.exports = mongoose.model('Product', productSchema)

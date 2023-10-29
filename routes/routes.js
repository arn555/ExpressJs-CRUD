const express = require('express');
// const Product = require('../models/productModel')
const {
    getAllProducts, 
    getAProduct,
    addAProduct,
    updateAProduct,
    deleteAProduct
} = require('../controllers/controllers')
const router = express.Router();

// Get all product
router.route('/product/retrieve').get(getAllProducts)

// Get a single product
router.route('/product/retrieve/:id').get(getAProduct)

// Add a product
router.route('/product').post( addAProduct)

// Update a product
router.route('/products/:id').put( updateAProduct)

// Delete a product
router.route('/products/:id').delete( deleteAProduct)

module.exports = router;
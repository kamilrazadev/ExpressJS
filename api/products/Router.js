const express = require('express');
const router = express.Router();

const {getAllProducts, addProduct} = require('./Controller');

//getAllProducts
router.get('/products', getAllProducts)

//addProduct
router.post('/addproducts', addProduct)

module.exports = router;
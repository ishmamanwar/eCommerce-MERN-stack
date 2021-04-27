const express = require('express');
const router = express.Router();

//@desc     GET all products from db
//@route    GET /api/products
//@access   Public
router.get('/', (req, res) => {

})

//@desc     GET a product by id from db
//@route    GET /api/products/:id
//@access   Public
router.get('/:id', (req, res) => {
    
})

module.exports = router;
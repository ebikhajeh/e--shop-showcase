// apiRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

// Define an API endpoint to get all products
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/categories', productController.getCategoriesForDropdown);


router.post('/register', userController.registerUser);
router.post('/login', userController.userLogin);
router.get('/session', userController.userSession);


module.exports = router;

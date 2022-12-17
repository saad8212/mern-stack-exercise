const express = require('express');
const router = express.Router();
const {main,register,login} = require('../controllers/user');   
const {addProduct,getProduct, updateProduct, removeProduct, editProduct} = require('../controllers/product');
const {add_activity,get_activities, update_activity, remove_activity, edit_activity} = require('../controllers/activityController');


//user routes
router.get('/', main);
router.post('/register', register);
router.post('/login', login);

//product routes
router.get('/product', getProduct);
router.post('/product', addProduct);
router.get('/product/:id', editProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', removeProduct);

//activity routes
router.get('/activity', get_activities);
router.post('/activity', add_activity);
router.get('/activity/:id', edit_activity);
router.put('/activity/:id', update_activity);
router.delete('/activity/:id', remove_activity);
module.exports = router;
const mongoose = require('mongoose');
let productSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String,
});
const Product= mongoose.model("Product", productSchema);
module.exports = Product;
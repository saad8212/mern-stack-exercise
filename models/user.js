const mongoose = require('mongoose');
let mongoSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    phone:String
});
const User = mongoose.model("User", mongoSchema);
module.exports = User;
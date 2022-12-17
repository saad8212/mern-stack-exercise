const mongoose = require('mongoose');
let activitySchema = new mongoose.Schema({
    name:String,
    description:String,
    type:String,
    duration:String,
    date:String,
});
const Activity= mongoose.model("Activity", activitySchema);
module.exports = Activity;

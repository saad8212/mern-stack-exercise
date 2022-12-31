const mongoose = require("mongoose");
let activitySchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
    unique: true,
  },
  description: {
    type:String,
    required: true,
  },
  type:{
    type:String,
    required: true,
  } ,
  duration:{
    type:String,
    required: true,
  } ,
  date:String,
  userId:String,
});
const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;

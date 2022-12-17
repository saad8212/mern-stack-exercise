const Activity = require("../models/activity");
// Test Page
const main = (req, res) => {
  res.render("contact");
};

// Create a new Activity
const add_activity = (req, res) => {
  const { name, description, type, date, duration } = req.body;
    //console.log(name, description, type, date, duration);
  if (name && description&& type && date && duration !== undefined) {
    const activity = new Activity(req.body);
    let result = activity.save();
    result.then((resp) => {
      console.log(resp);
      res.send(resp);
    });
  } else {
    res.status(201).send({ message: "All fields are compulsory" });
  }
};

// get all activities

const get_activities = (req, res) => {
    const activity = Activity.find();
    activity.then((resp) => {
      console.log(resp);
      res.send(resp);
    });
  };
  
  //edit an existing product
  const edit_activity = async(req, res) => {
    const id = req.params.id; 
    console.log(id);
    const activity =await Activity.findById(id);
    console.log(activity);
    res.send(activity);
  };
  
  //update activity
  const update_activity = (req, res) => {
    const id = req.params.id;
    console.log(id);
    const activity = Activity.findByIdAndUpdate(id, { $set: req.body });
    activity.then((resp) => {
      let result = Activity.findById(resp.id);
      result.then((response) => {
        if(response) {
          console.log(response);
          res.status(200).send(response);
        } else {
          res.status(404).send({message: 'Activity not found'});
        }
      });
    });
  };
  
  //Remove a Product
  const remove_activity = (req, res) => {
    const id = req.params.id;
    const activity = Activity.findByIdAndRemove(id);
    activity.then((resp) => {
      console.log(resp);
      res.send({ message: "Activity deleted successfully!" });
    });
  };
  




module.exports = { add_activity, remove_activity, edit_activity, update_activity,get_activities};

const Activity = require("../models/activity");


// Test Page
const main = (req, res) => {
  res.render("activities");
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
    res.status(400).send({ message: "All fields are compulsory" });
  }
};

// get all activities

const get_activities = (req, res) => {
    const activity = Activity.find({userId: req.params.id});
    activity.then((resp) => {
      res.send(resp);
    });
  };
  
  //Search activity
  const search_activity = async (req, res) => {
    const params = req.params.activity;
    console.log(params);
    if (params === 'all') {
      const activity = await Activity.find();
      return res.send(activity);
    }
    const activity = await Activity.find({
      $or: [
        { type: { $regex: params } },
      ],
    });
    if(activity !==''){
      console.log(activity);
    res.status(200).send(activity);
    } else {
      res.status(404).send({message:"record not found"});
    }
  };
  

  //edit an existing activity
  const edit_activity = async(req, res) => {
    const id = req.params.id; 
    console.log("id", id, "..........................................");
    const activity =await Activity.findById(id);
    console.log(activity);
    res.send(activity);
  };
  
  //update activity
  const update_activity = (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
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
  




module.exports = {main, add_activity, remove_activity,search_activity, edit_activity, update_activity,get_activities};

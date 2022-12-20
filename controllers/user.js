const User = require("../models/user");

//jwt
var jwt = require('jsonwebtoken');
const jwtkey = "activity_token"; 


// Test Page
 
// Register a new user
const register = (req, res) => {
  const { name, email, password, photo } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(301).send({ message: "User Already Registered" });
    }
    if (email && password && photo && name !== "") {
      const newUser = new User(req.body);
      let result = newUser.save();
      result.then((resp) => {
        jwt.sign({resp}, jwtkey,{expiresIn:"2h"}, (err,token) =>{
          if(err){
           res.status(404).send({message:"user not found"});
          }
          res.status(200).send({resp:resp._id,auth:token});
          console.log(token, resp);
        }) 
      });
    }
  });
};

// Login existing user
const login = async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password"); 
    if (user) {
      jwt.sign({user}, jwtkey,{expiresIn:"2h"}, (err,token) =>{
        if(err){
         res.send({message:"user not found"});
        }
        res.send({user,auth:token});
        console.log(token, user);
      }) 
    } else {
      res.status(303).send({ message: "user not found" });
    }
  }
};

module.exports = {register, login };

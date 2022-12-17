const User = require("../models/user");
// Test Page
const main = (req, res) => {
  res.render("contact");
};

// Register a new user
const register = (req, res) => {
  const { name, email, password, phone } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(201).send({ message: "User Already Registered" });
    }
    if (email && password && phone && name !== "") {
      const newUser = new User(req.body);
      let result = newUser.save();
      result.then((resp) => {
        console.log(resp.id);
        res.send({ id: resp.id });
      });
    }
  });
};

// Login existing user
const login = async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password"); 
    if (user) {
      console.log(user);
      res.send(user);
    } else {
      res.status(201).send({ message: "user not found" });
    }
  }
};

module.exports = { main, register, login };

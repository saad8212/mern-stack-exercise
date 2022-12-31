const express = require("express");
const router = express.Router();
var jwt = require('jsonwebtoken');
const jwtkey = "activity_token"; 
const {  register, login } = require("../controllers/user");

const {
  add_activity,
  main,
  get_activities,
  update_activity,
  remove_activity,
  edit_activity,
  search_activity
} = require("../controllers/ActivityController");

//middleware
let verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if (token) {
      token = token.split(" ")[1];
      console.log(token);
    jwt.verify(token,jwtkey,(err,response) =>{
        if(err) {
            res.status(401).send({ message: "Token is Invalid" });
        } else {
            next();
        }
    })
  } else {
    res.status(403).send({ message: "Token is required" });
  }
};

//user routes
router.get("/", main);

router.post("/register",register);
router.post("/login", login);

// Activity Routes
router.get("/activity/:id", get_activities);
router.post("/activity", add_activity);
router.get("/activity/search/:activity",search_activity)
router.get("/edit-activity/:id", edit_activity);
router.put("/activity/:id", update_activity);
router.delete("/activity/:id", remove_activity);
module.exports = router;

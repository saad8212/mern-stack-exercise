const express = require("express");
const router = express.Router();
var jwt = require('jsonwebtoken');
const jwtkey = "activity_token"; 
const {  register, login } = require("../controllers/user");
const {
  addProduct,
  getProduct,
  updateProduct,
  removeProduct,
  editProduct,
  searchProduct,
} = require("../controllers/product");
const {
  add_activity,
  main,
  get_activities,
  update_activity,
  remove_activity,
  edit_activity,
  search_activity
} = require("../controllers/activityController");

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
//Middleware for photos
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
  })
});


//user routes
router.get("/", main);
router.post("/register", register);
router.post("/login", login);

//product routes
// router.get("/activities", verifyToken, getProduct);
// router.get("/activity/:id",verifyToken, editProduct);
// router.get("/activity/search/:id",verifyToken, searchProduct);
// router.post("/activity",verifyToken, addProduct);
// router.put("/activity/:id",verifyToken, updateProduct);
// router.delete("/activity/:id",verifyToken, removeProduct);

//activity routes

router.get("/activity", get_activities);
router.post("/activity", add_activity);
router.get("/activity/search/:id",search_activity)
router.get("/activity/:id", edit_activity);
router.put("/activity/:id", update_activity);
router.delete("/activity/:id", remove_activity);
module.exports = router;

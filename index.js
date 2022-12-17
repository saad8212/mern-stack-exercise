const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.set("view engine", "ejs");
mongoose.connect(`mongodb://localhost:27017/e-com`).then(res =>{
    console.log("database connection established");
}).catch(err=>{
    console.log("error connecting to database, ", err);
})
app.use(cors());
app.use(express.json())
app.use('/', require("./routes/routes"));
app.listen("3005");

 

 
 
 
 
//Import Database Model
const Product = require("../models/product");
 




// Save Product into table
const addProduct = async (req, res) => {
  console.log(req.body);
  const { name, price, company, userId, category } = req.body;
  console.log(name, price, company, category,userId );
  if (name && price && company && category !== undefined) {
    const newProduct = new Product(req.body);
    let result = newProduct.save();
    result.then((resp) => {
      console.log(resp);
      res.send(resp);
    });
  } else {
    res.status(301).send({ message: "All fields are compulsory" });
  }
};

//Get Products from database
const getProduct = (req, res) => {
  const product = Product.find();
  product.then((resp) => {
    console.log(resp);
    res.send(resp);
  });
};

//edit an existing product
const editProduct = async(req, res) => {
  const id = req.params.id; 
  console.log(id);
  const product =await Product.findById(id);
  console.log(product);
  res.send(product);
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const product = Product.findByIdAndUpdate(id, { $set: req.body });
  product.then((resp) => {
    let result = Product.findById(resp.id);
    result.then((response) => {
      if(response) {
        console.log(response);
        res.status(200).send(response);
      } else {
        res.status(404).send({message: 'Product not found'});
      }
    });
  });
};

//Remove a Product
const removeProduct = async (req, res) => {
  const id = req.params.id;
  const product =await Product.deleteOne({_id:id});
  console.log(product);
  res.status(200).send(product);
};
const searchProduct = async (req, res) => {
  const id = req.params.id;
  const product =await Product.find({
    $or: [
      { category: { $regex: id } },
    ],
  });
  console.log(product);
  res.send(product);
};

//middleware for checking auth token



module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  removeProduct,
  editProduct,
  searchProduct
};

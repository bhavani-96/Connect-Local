const port = 4000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');


app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://lavanyaadapa:1234567890@cluster0.tsgyrtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/connectlocal");


//API creation
app.get("/",(req,res)=>{
  res.send("Welcome to the API")
})

//image storage engine
const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
//creating upload end point
app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res)=>{
  res.json({
    sucess:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  })

})

//schema for craeting products
const Product = mongoose.model("Product",{
  id:{
    type: Number,
    required: true,
    },
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,

  },
  description:{
    type:String,
    required:true,

  },
  phone:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  user:{
    type:String,
    required:true,
  },
  available:{
    type:Boolean,
    default:true,
  },
  
  
})

app.post('/addproduct',async(req,res)=>{
  let products =await Product.find({});
  let id;
  if(products.length>0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id+1;
  }
  
  else{
    id=1;
  }
  const product = new Product({
    id:id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    address:req.body.address,
    description:req.body.description,
    phone:req.body.phone,
    price:req.body.price,
    user:req.body.user,
    
  });
  console.log(product);
  await product.save();
  console.log('saved');
  res.json({
    success:true,
    name:req.body.name,
  })
})
//creating api for delete products

app.post('/removeproduct',async (req,res)=>{
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name
  })

})

//creating API for getting all products
app.get('/allproducts',async (req,res)=>{
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
})


app.listen(port,(error)=>{
  if(!error){
    console.log("SErver Running on port"+port)
  }
  else{
    console.log("Error"+error)
  }
})
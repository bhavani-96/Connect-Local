const port = 4000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());

const uploadDir = './uploads/images';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

mongoose.connect("mongodb+srv://lavanyaadapa:1234567890@cluster0.tsgyrtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/connectlocal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload = multer({ storage: storage });

app.use('/images', express.static(uploadDir));

app.post('/upload', upload.single('product'), (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
  } catch (error) {
    console.error('Error in /upload endpoint:', error);
    res.status(500).json({ success: 0, error: error.message });
  }
});

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post('/addproduct', async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      address: req.body.address,
      description: req.body.description,
      phone: req.body.phone,
      price: req.body.price,
      user: req.body.user,
    });
    console.log(product);
    await product.save();
    console.log('saved');
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error('Error in /addproduct endpoint:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/removeproduct', async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
      success: true,
      name: req.body.name
    });
  } catch (error) {
    console.error('Error in /removeproduct endpoint:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/allproducts', async (req, res) => {
  try {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
  } catch (error) {
    console.error('Error in /allproducts endpoint:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300; index++) {
        cart[index] = 0;
    }
    return cart;
};

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
    default: getDefaultCart,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Define the booking schema
const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    productId: {
        type: Number,
        required: true
    }
});

// Create the Booking model
const Booking = mongoose.model('Booking', BookingSchema);

// Endpoint to handle bookings
app.post('/book', async (req, res) => {
    try {
        const { name, date, address, phoneNumber, productId } = req.body;
        
        const newBooking = new Booking({
            name,
            date,
            address,
            phoneNumber,
            productId
        });

        await newBooking.save();

        res.status(200).json({ success: true, message: "Booking successful" });
    } catch (error) {
        console.error('Error in /book endpoint:', error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});






app.post('/signup', async (req, res) => {
  try {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ success: false, errors: "Existing user found with same email ID" });
    }

    const user = new User({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    
    await user.save();

    const data = {
      user: {
        id: user.id
      }
    };
    
    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
  } catch (error) {
    console.error('Error in /signup endpoint:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/login', async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id
        }
      };
      const token = jwt.sign(data, 'secret_ecom');
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: 'Password does not match.' });
    }
  } else {
    res.json({ success: false, errors: 'User not found.' });
  }
});

app.get('/popularplumber', async (req, res) => {
  let products = await Product.find({ category: "plumber" });
  let popular_in_plumber = products.slice(0, 4);
  console.log("Popular in plumbers fetched");
  res.send(popular_in_plumber);
});

const fetchUser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: "Please login using correct mail" });
  }
  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: "Please login using correct mail" });
  }
};

app.post('/addtocart', fetchUser, async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!userData.cartData[req.body.itemId]) {
      userData.cartData[req.body.itemId] = 0;
    }
    
    userData.cartData[req.body.itemId] += 1;
    console.log(userData.cartData[req.body.itemId]);
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.json({ message: "ADDED" });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/decrementcart', fetchUser, async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!userData.cartData[req.body.itemId]) {
      return res.status(400).json({ error: 'Item not found in cart' });
    }
    if (userData.cartData[req.body.itemId] > 0) {
      userData.cartData[req.body.itemId] -= 1;
      console.log(userData.cartData[req.body.itemId]);
      await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
      res.json({ message: "DECREMENTED" });
    } else {
      res.status(400).json({ error: 'Item quantity is already zero' });
    }
  } catch (error) {
    console.error('Error decrementing cart:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/getcart', fetchUser, async (req, res) => {
  try {
    console.log("GetCart");
    let userData = await User.findOne({ _id: req.user.id });
    res.json(userData.cartData);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
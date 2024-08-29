const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Booking = require('./models/booking');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Allow cross-origin requests
app.use(bodyParser.json());

// MongoDB setup
const MONGODB_URI = 'mongodb+srv://lavanyaadapa:1234567890@cluster0.tsgyrtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/connectlocal';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected');
});

// API endpoint to handle bookings
app.post('/api/bookings', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        console.error('Failed to save booking:', error);
        res.status(500).json({ error: 'Failed to save booking' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

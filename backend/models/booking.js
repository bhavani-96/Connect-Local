const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    date: Date,
    address: String,
    complaint: String,
    phoneNumber: String,
    productId: String,
    productName: String,
    productPrice: Number,
    productDescription: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

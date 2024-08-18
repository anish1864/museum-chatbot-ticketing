const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  event: { type: String, required: true },
  date: { type: Date, required: true },
  numberOfTickets: { type: Number, required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);

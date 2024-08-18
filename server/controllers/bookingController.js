const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { userId, event, date, numberOfTickets } = req.body;
  try {
    const newBooking = new Booking({ userId, event, date, numberOfTickets });
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating booking' });
  }
};

import React from 'react';
import BookingForm from '../components/BookingForm';
import Checkout from '../components/Checkout';

const BookingPage = () => (
  <div>
    <h1>Book Tickets</h1>
    <BookingForm />
    <Checkout />
  </div>
);

export default BookingPage;

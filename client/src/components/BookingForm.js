import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    event: '',
    date: '',
    numberOfTickets: 1,
  });

  const { event, date, numberOfTickets } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const booking = { event, date, numberOfTickets };
    await axios.post('/api/bookings', booking);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="event" value={event} onChange={onChange} required />
      <input type="date" name="date" value={date} onChange={onChange} required />
      <input type="number" name="numberOfTickets" value={numberOfTickets} onChange={onChange} required />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;

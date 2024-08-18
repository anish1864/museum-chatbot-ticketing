import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to the Museum Ticketing System</h1>
    <Link to="/book">Book Tickets</Link>
    <Link to="/admin">Admin Dashboard</Link>
  </div>
);

export default HomePage;

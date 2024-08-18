import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const registerUser = (userData) => api.post('/users/register', userData);
export const loginUser = (userData) => api.post('/users/login', userData);
export const createBooking = (bookingData) => api.post('/bookings', bookingData);
export const processPayment = (paymentData) => api.post('/payments', paymentData);

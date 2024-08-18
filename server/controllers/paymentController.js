const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
  const { amount, token } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token.id,
      description: 'Museum Ticket Booking',
    });
    res.status(200).json(charge);
  } catch (error) {
    res.status(500).json({ error: 'Error processing payment' });
  }
};

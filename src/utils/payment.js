const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Process a payment
exports.processPayment = async (paymentData) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return paymentIntent.client_secret;
  } catch (err) {
    console.error('Error processing payment:', err);
    throw err;
  }
};

/*
In this file, we define a function for processing payments using the Stripe payment gateway. Note that you need to install the stripe package (npm install stripe) and set the STRIPE_SECRET_KEY environment variable with your Stripe secret key.

The processPayment function takes paymentData as input, which should contain the payment amount and other necessary information. It creates a new PaymentIntent object using the Stripe API and returns the client_secret for the client to complete the payment process.
*/
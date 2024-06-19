import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/payments';

export const processPayment = async (paymentData) => {
  try {
    const response = await axios.post(API_BASE_URL, paymentData);
    return response.data;
  } catch (error) {
    console.error('Error processing payment:', error);
    throw error;
  }
};

import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import axios from 'axios';

const Payment = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/payment', {
        amount: totalPrice,
        token: 'your_test_token', // This should be replaced by actual token from Stripe.js or frontend integration
      });
      if (response.data.status === 'success') {
        setPaymentStatus('Payment successful');
        clearCart();
      } else {
        setPaymentStatus('Payment failed');
      }
    } catch (error) {
      setPaymentStatus('Payment error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Payment</h1>
      {cartItems.length === 0 ? <p>No items in cart</p> : (
        <div>
          <h3>Total: {totalPrice}</h3>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      )}
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Payment;

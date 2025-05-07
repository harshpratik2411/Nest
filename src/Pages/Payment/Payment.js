import React, { useState } from 'react';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    const options = {
      key: 'zp_test_KBu0EDUwXZpGZo', 
      amount: amount * 100, 
      currency: 'INR',
      name: 'Your Company',
      description: 'Test Transaction',
      handler: function (response) {
        alert('Payment Successful');
        console.log(response);
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;

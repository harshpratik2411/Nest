import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar/Navbar";
import TopNav1 from "../../Components/TopNav1/TopNav1";
import TopNav2 from "../../Components/TopNav2/TopNav2";
import Footer from "../../Components/Footer/Footer";
import { IoTrashBinSharp } from "react-icons/io5";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <TopNav2 />
      <TopNav1 />
      <div className="p-4 sm:p-6 max-w-6xl mt-10 mx-auto font-quicksand bg-custom-new-white-bgstoke min-h-screen">
        <h2
          className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-custom-blue font-lato text-center"
          data-aos="fade-down"
        >
          🛍️ Your Shopping Cart
        </h2>

        {/* Delivery Address Section */}
        <div
          className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-10 border border-gray-200 max-w-4xl mx-auto"
          data-aos="fade-down"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="text-custom-blue text-xl sm:text-2xl mt-1">📍</div>
              <div>
                <h3 className="text-md sm:text-lg font-bold text-custom-blue font-lato mb-1">
                  Delivery Address
                </h3>
                <p className="text-custom-new-gray font-quicksand font-semibold leading-relaxed max-w-md text-sm sm:text-base">
                  457 Main Street, Apartment 4B, India, NY 221007, United States
                </p>
              </div>
            </div>
            <button className="bg-custom-green text-custom-white text-sm font-quicksand font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
              Change Address
            </button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center text-custom-text-lightgray mt-20 text-lg font-quicksand animate-pulse">
            Your cart is currently empty. Let’s fill it with something amazing!
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div
              className="sm:col-span-2 space-y-6 bg-custom-white rounded-2xl shadow-lg p-4 sm:p-8 border border-custom-new-white-stroke"
              data-aos="fade-up"
            >
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-custom-new-white-stroke pb-4 sm:pb-6 gap-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 sm:h-24 sm:w-24 object-contain border rounded-xl bg-custom-white-stroke shadow-sm"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg sm:text-xl text-custom-blue font-lato">
                        {item.title}
                      </h4>
                      <p className="text-sm text-custom-text-gray mt-1 font-quicksand">
                        ${item.price.toFixed(2)} × {item.quantity}
                      </p>
                      <div className="flex space-x-2 mt-3">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.quantity - 1);
                            } else {
                              removeFromCart(item.id);
                            }
                          }}
                          className="px-3 py-1 bg-custom-white-stroke text-custom-blue rounded hover:bg-custom-new-white transition"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border border-custom-white-stroke rounded bg-custom-white-fillstroke">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 bg-custom-white-stroke text-custom-blue rounded hover:bg-custom-new-white transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 font-medium font-lato transition"
                  >
                    <IoTrashBinSharp className="text-xl sm:text-2xl" />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="bg-custom-white rounded-2xl shadow-lg p-4 sm:p-8 border border-custom-new-white-stroke sticky top-8"
              data-aos="fade-left"
            >
              <div className="text-xl sm:text-2xl font-bold text-custom-blue font-lato mb-4 sm:mb-6 text-center">
                Price Summary
              </div>
              <div className="space-y-3 text-custom-text-gray text-sm sm:text-base">
                <div className="flex font-quicksand font-bold justify-between">
                  <span>{cartItems.length} item(s)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="border font-quicksand border-custom-white-stroke rounded-lg px-4 py-2 w-full mt-2"
                  />
                </div>
                <div className="flex font-quicksand font-bold justify-between">
                  <span>Coupon Discount</span>
                  <span className="text-custom-green">- $2.50</span>
                </div>
                <div className="flex font-quicksand font-bold justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-custom-green">Free</span>
                </div>
                <hr className="my-4 border-custom-white-stroke" />
                <div className="flex justify-between text-base sm:text-lg font-semibold text-custom-blue">
                  <span>Total</span>
                  <span>${(total - 2.5).toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-custom-green hover:bg-green-600 text-white text-lg font-semibold rounded-xl transition duration-300" onClick={() =>{
                console.log("Payment button clicked");
                 const options = {
                  key: 'rzp_test_KBu0EDUwXZpGZo', 
                  amount: 100 * 100, 
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
              }}>
                Place Order
              </button>
              <p className="mt-4 text-xs sm:text-sm text-custom-green font-quicksand font-semibold text-center">
                Need help?{" "}
                <span className="text-custom-blue ml-2 font-quicksand font-semibold cursor-pointer hover:underline">
                  Contact Support
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;

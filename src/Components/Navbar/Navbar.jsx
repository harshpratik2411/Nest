import React from 'react';

const Navbar = () => {
  return (
    <nav   style={{ backgroundColor: '#ECECEC', color: '#7E7E7E' }} className="font-lato p-4" >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex -ml-20 -mt-7 space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about-us" className="hover:text-gray-400">About Us</a>
          <a href="/my-account" className="hover:text-gray-400">My Account</a>
          <a href="/wishlist" className="hover:text-gray-400">Wishlist</a>
          <a href="/order-tracking" className="hover:text-gray-400">Order Tracking</a>
        </div>

        <div className="text-center -mt-7  mx-8 text-sm font-lato font-semibold">
          <span >100% Secure Delivery</span> without contacting the courier
        </div>
       
        <div className="flex -mt-3 space-x-8"> 

          <a href="/help" className="hover:text-gray-400 text-sm">Need Help?  Call Us  </a>  
          <span  style={{  color: '#3BB77E' }} className='font-lato -space-x-2 text-sm'> +12345667
          </span>
          <div className="flex items-center space-x-2"> 
            <select  style={{ backgroundColor: '#ECECEC', color: '#7E7E7E' }} className="bg font-lato py-1 text-sm rounded-md">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
           
            </select>
            <select  style={{ backgroundColor: '#ECECEC', color: '#7E7E7E' }} className="text-sm py-1 px-2 rounded-md">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
    
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  

{/* <div style={{ backgroundColor: '#1e40af', color: '#ffffff' }} className="p-6"></div> */}

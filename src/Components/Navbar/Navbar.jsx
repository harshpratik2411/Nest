import React from 'react';

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#FFFFFF',
        color: '#7E7E7E',
        borderBottom: '1px  #7E7E7E',
      }}
      className="font-lato  p-2 flex -ml-[8px]  justify-between items-center"
    >
      {/* Left Section */}
      <div className="flex space-x-3 mx-[120px] my-[6.5px] text-[13px]">
        <a href="/about-us" className="hover:text-gray-400">
          About Us
        </a>
        <span className="text-custom-line ">|</span>
        <a href="/my-account" className="hover:text-gray-400">
          My Account
        </a>
        <span className="text-custom-line">|</span>
        <a href="/wishlist" className="hover:text-gray-400">
          Wishlist
        </a>
        <span className="text-custom-line">|</span>
        <a href="/order-tracking" className="hover:text-gray-400">
          Order Tracking
        </a>
      </div>

      {/* Center Section */} 
      <div className="text-[14px]  ">
        <span style={{ color: '#7E7E7E' }}>100% Secure delivery</span>{' '}
        without contacting the courier
      </div>

      {/* Right Section */}  
      <div className='mr-[18px] flex'>

      <div className="flex items-center  space-x-4">
        <a href="/help" className="hover:text-gray-400  text-[14px]">
          Need help? Call Us:
        </a>
         <span style={{ color: '#3BB77E' }} className="font-lato ">
          +1800 900
        </span> 
      </div>

        {/* Language & Currency Select */}
        <div className="flex items-center space-x-2">
            <select
              style={{ backgroundColor: '#FFFFFF', color: '#7E7E7E' }}
              className="bg font-lato bg-custom-new-white py-1 mt-2 ml-4 text-sm mb-3 rounded-md"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select> 
    
            <p href="/order-tracking" className=" hover:text-gray-400"/>|
            <select
              style={{ backgroundColor: '#FFFFFF', color: '#7E7E7E' }}
              className="text-sm py-1 mb-3 mt-2  px-2 rounded-md"
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;

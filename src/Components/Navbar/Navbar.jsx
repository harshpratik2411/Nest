import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon for sm/md screens */}
      <div className="lg:hidden p-4 flex justify-between items-center">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-custom-gray focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar for sm/md screens */}
      {isSidebarOpen && (
        <div className="lg:hidden bg-white border-r border-gray-200 w-64 p-4 fixed top-0 left-0 h-full z-50">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-600 mb-4"
          >
            Close ✖️
          </button>
          <nav className="flex  flex-col font-lato space-y-4 opacity-100 text-sm text-custom-new-gray">
            <a href="/about-us" className="hover:text-gray-400">About Us</a>
            <a href="/my-account" className="hover:text-gray-400">My Account</a>
            <a href="/wishlist" className="hover:text-gray-400">Wishlist</a>
            <a href="/order-tracking" className="hover:text-gray-400">Order Tracking</a>
            <hr />
            <a href="/help" className="hover:text-gray-400">Need help? Call Us:</a>
            <span style={{ color: '#3BB77E' }}>+1800 900</span>
            <select
              style={{ backgroundColor: '#FFFFFF', color: '#7E7E7E' }}
              className="py-1 px-2 border rounded"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
            <select
              style={{ backgroundColor: '#FFFFFF', color: '#7E7E7E' }}
              className="py-1 px-2 border rounded"
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </nav>
        </div>
      )}

      {/* Your Original Navbar – visible only on large screens */}
      <nav
        style={{
          backgroundColor: '#FFFFFF',
          color: '#7E7E7E',
          borderBottom: '1px  #7E7E7E',
        }}
        className=" p-2 font-lato hidden lg:flex -ml-[70px] justify-between items-center"
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
        <div className="text-[14px] opacity-100 mr-8 font-lato font-semibold">
          <span style={{ color: '#7E7E7E' }}>100% Secure delivery</span> without contacting the courier
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

            <p className=" hover:text-gray-400">|</p>
            <select
              style={{ backgroundColor: '#FFFFFF', color: '#7E7E7E' }}
              className="text-sm py-1 mb-3 mt-2 px-2 rounded-md"
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

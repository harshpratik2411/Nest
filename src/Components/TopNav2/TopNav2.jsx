import React, { useState } from 'react';
import NestLogo from '../../assets/Nest/NestLogo.svg';
import compare from '../../assets/icons/compare.svg';
import cart from '../../assets/icons/cart.svg';
import location from '../../assets/icons/location.svg';
import account from '../../assets/icons/account.svg';
import wishlist from '../../assets/icons/wishlist.svg';
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowDropdown } from "react-icons/io";

const TopNav2 = () => {
  const categories = ['All categories'];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='hidden sm:flex flex-wrap items-center justify-center sm:justify-start gap-4 p-4 w-full'>
      
      {/* Nest Logo - Always visible */}
      <div className="flex items-center ">
        <img src={NestLogo} alt="Nest Logo" className="w-[170px] ml-7 cursor-pointer h-[55px]" />
      </div>

      {/* Search + Category - Hidden on small, visible on lg */}
      <div className="hidden lg:flex ml-5 flex-col sm:flex-row mt-3 max-w-screen-xl justify-between border-2 rounded-md border-custom-light-green w-full sm:w-[700px] h-[55px] items-center p-2">
        <div className="flex space-x-4 overflow-x-auto sm:flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="px-4 py-2 bg-custom-white text-custom-blue rounded-full cursor-pointer font-semibold relative">
              {category}
              <p className='absolute right-0 top-1/2 transform -translate-y-1/2 text-l text-custom-line'>|</p>
            </div>
          ))}
        </div>

        <div className="flex text-left bg-custom-white p-2 rounded-lg w-full sm:w-96">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for items.."
            className="w-full text-custom-gray rounded-lg text-sm outline-none search-input -ml-12"
          />
        </div>

        <FiSearch className="text-gray-600 text-2xl cursor-pointer ml-3" />
      </div>

      {/* Icons Section */}
      <div className="flex items-center ml-[60px] mt-3 space-x-8">
        {/* Compare - Hidden on small */}
        <a href="#" className="hidden lg:flex items-center space-x-1 text-custom-new-gray">
          <img src={compare} alt="Compare" />
          <span className='mt-2 text-sm'>Compare</span>
        </a>

        {/* Wishlist - Always visible */}
        <a href="#" className="flex items-center space-x-1 text-custom-new-gray">
          <img src={wishlist} alt="Wishlist" />
          <span className='mt-2 text-sm'>Wishlist</span>
        </a>

        {/* Cart - Always visible */}
        <a href="#" className="flex items-center space-x-1 text-custom-new-gray">
          <img src={cart} alt="Cart" />
          <span className='mt-2 text-sm'>Cart</span>
        </a>

        {/* Account - Hidden on small */}
        <a href="#" className="hidden lg:flex items-center space-x-1 text-custom-new-gray">
          <img src={account} alt="Account" />
          <span className='mt-2 text-sm'>Account</span>
        </a>
      </div>
    </div>
  );
};

export default TopNav2;

import React from 'react'
import {  FaRegHeart, FaShoppingCart, FaUser } from 'react-icons/fa' 
import { FaLocationDot } from 'react-icons/fa6'
import compare from '../../assets/icons/compare.svg'
import { IoMdArrowDropdown } from "react-icons/io";

const Top3 = () => {
  return (
    <div className="flex justify-between items-center mt-2 p-4  gap-4">
    {/* Location Button */}
    <button className="flex items-center   bg-white  text-custom-green/70  border-2   px-1 ml-2 py-3 rounded-lg">
       <FaLocationDot className=' text-custom-gray'/>
        <span className=''> Your Location </span>
      </button> 
  
    {/* Anchor Links with Icons */}
    <div className="flex space-x-4 gap-4">
      <a href="#" className="flex items-center space-x-3 text-custom-new-gray">
      
        <img src={compare} alt="Nest Logo"  />
        <span>Compare</span>
      </a>
      <a href="#" className="flex items-center space-x-2 text-custom-new-gray">
        <FaRegHeart />
        <span>Wishlist</span>
      </a>
      <a href="#" className="flex items-center space-x-2 text-custom-new-gray">
        <FaShoppingCart />
        <span>Cart</span>
      </a>
      <a href="#" className="flex items-center space-x-2 text-custom-new-gray">
        <FaUser />
        <span>Account</span>
      </a>
    </div>
  </div>
  
  )
}

export default Top3

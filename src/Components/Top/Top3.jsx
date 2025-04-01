import React from 'react'
import compare from '../../assets/icons/compare.svg'
import cart from '../../assets/icons/cart.svg'
import location from '../../assets/icons/location.svg'
import account from '../../assets/icons/account.svg'
import wishlist from '../../assets/icons/wishlist.svg'
import { IoMdArrowDropdown } from "react-icons/io";

const Top3 = () => {
  return (
    <div className="flex justify-between items-center mt-2 p-4  gap-4">
    {/* Anchor Links with Icons */}
    <div className="flex space-x-12 w-[20px]  h-[20px] gap-4">
      <a href="#" className="flex items-center space-x-1 text-custom-new-gray">
      
        <img src={compare} alt="Nest Logo"  />
        <span className='mt-3'>Compare</span>
      </a>
      <a href="#" className="flex items-center space-x-1 text-custom-new-gray">
      <img src={wishlist} alt="Nest Logo"  />
        <span className='mt-3'>Wishlist</span>
      </a>
      <a href="#" className="flex items-center space-x-1 text-custom-new-gray">
      <img src={cart} alt="Nest Logo"  />
        <span className='mt-3'>Cart</span>
      </a>
      <a href="#" className="flex items-center space-x-1 text-custom-new-gray">
      <img src={account} alt="Nest Logo"  />
        <span className='mt-3'>Account</span>
      </a>
    </div>
  </div>
  
  )
}

export default Top3

import React from "react";
import navDeals from "../../assets/icons/navDeals.svg";

const Top2 = () => {
  return (
    <nav className="flex justify-center mt-1  p-4 bg-custom-white">
      <ul className="flex space-x-10 text-custom-blue">
        <li className="hover:text-custom-green cursor-pointer flex items-center gap-x-4">
          <img className="h-[21px] mb-8 w-[20px]" src={navDeals} alt="" />
          <span className="mb-8">Deals</span>
        </li>
        <li className="hover:text-custom-green text-custom-green cursor-pointer">Home</li>
        <li className="hover:text-custom-green cursor-pointer">About</li>
        <li className="hover:text-custom-green cursor-pointer">Shop</li>
        <li className="hover:text-custom-green cursor-pointer">Vendors</li>
        <li className="hover:text-custom-green cursor-pointer">Mega Menu</li>
        <li className="hover:text-custom-green cursor-pointer">Blog</li>
        <li className="hover:text-custom-green cursor-pointer">Pages</li>
        <li className="hover:text-custom-green cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Top2;

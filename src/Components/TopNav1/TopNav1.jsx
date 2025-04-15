import React from "react";
import allcategory from "../../assets/icons/allcategory.svg";
import navDeals from "../../assets/icons/navDeals.svg";
import headphone from "../../assets/icons/headphone.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

const TopNav1 = () => {
  return (
    <div className="hidden sm:block w-full bg-custom-white mt-4 border border-custom-new-white rounded-md">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 md:px-8">
        
        {/* Left: Browse Categories */}
        <div className="mb-2 px-4 md:mb-0">
          <button className="flex items-center px-6 py-3 bg-custom-green text-custom-white rounded-md text-sm md:text-base">
            <span className="mr-2">
              <img src={allcategory} alt="All Categories" />
            </span>
            Browse All Categories
          </button>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="w-full md:w-auto mb-3 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start text-custom-blue font-quicksand font-bold space-x-4 md:space-x-6 text-sm md:text-base">
            <li className="hover:text-custom-green cursor-pointer flex items-center gap-x-2">
              <img className="h-[21px] w-[20px]" src={navDeals} alt="Deals" />
              <span className="text-[16px]">Deals</span>
            </li>
            <li className="hover:text-custom-green text-custom-green text-[16px] flex cursor-pointer items-center">
              Home<RiArrowDropDownLine className="mt-1" size={20} />
            </li>
            <li className="hover:text-custom-green cursor-pointer text-[16px]">About</li>
            <li className="hover:text-custom-green cursor-pointer flex items-center text-[16px]">
              Shop <RiArrowDropDownLine className="mt-1" size={20} />
            </li>
            <li className="hover:text-custom-green text-[16px] cursor-pointer flex items-center">
              Vendors <RiArrowDropDownLine className="mt-1" size={20} />
            </li>
            <li className="hover:text-custom-green text-[16px] cursor-pointer flex items-center">
              Mega Menu <RiArrowDropDownLine className="mt-1" size={20} />
            </li>
            <li className="hover:text-custom-green text-[16px] cursor-pointer">Blog</li>
            <li className="hover:text-custom-green cursor-pointer flex items-center text-[16px]">
              Pages <RiArrowDropDownLine className="mt-1" size={20} />
            </li>
            <li className="hover:text-custom-green text-[16px] cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Right: Support Info */}
        <div className="flex items-center mt-3 md:mt-0">
          <img className="w-[30px] h-[30px] cursor-pointer" src={headphone} alt="Support Icon" />
          <div className="ml-3">
            <div className="font-bold cursor-pointer text-[20px] md:text-[25px] font-quicksand text-custom-green">
              1900 - 888
            </div>
            <div className="text-custom-new-gray text-xs md:text-sm font-medium font-lato">
              24/7 Support Center
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav1;

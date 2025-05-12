import React from "react";
import allcategory from "../../assets/icons/allcategory.svg";
import navDeals from "../../assets/icons/navDeals.svg";
import headphone from "../../assets/icons/headphone.svg";
import dropdown from '../../assets/icons/dropdown.svg';
import { Link, useLocation } from "react-router";

const TopNav1 = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
            <li className={`hover:text-custom-green cursor-pointer flex items-center gap-x-2 ${currentPath === "/deals" ? "text-custom-green" : ""}`}>
              <img className="h-[21px] w-[20px]" src={navDeals} alt="Deals" />
              <Link to="/deals" className="text-[16px]">Deals</Link>
            </li>
            <li className={`hover:text-custom-green flex cursor-pointer items-center text-[16px] ${currentPath === "/" ? "text-custom-green" : ""}`}>
              <Link to="/" className="flex items-center">Home <img src={dropdown} className="mt-1 ml-2" size={20} /></Link>
            </li>
            <li className={`hover:text-custom-green cursor-pointer text-[16px] ${currentPath === "/about" ? "text-custom-green" : ""}`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`hover:text-custom-green cursor-pointer flex items-center text-[16px] ${currentPath === "/shop" ? "text-custom-green" : ""}`}>
              <Link to="/shop" className="flex items-center">Shop <img src={dropdown} className="mt-1 ml-2" size={20} /></Link>
            </li>
            <li className={`hover:text-custom-green cursor-pointer flex items-center text-[16px] ${currentPath === "/vendors" ? "text-custom-green" : ""}`}>
              <Link to="/vendors" className="flex items-center">Vendors <img src={dropdown} className="mt-1 ml-2" size={20} /></Link>
            </li>
            <li className={`hover:text-custom-green cursor-pointer flex items-center text-[16px] ${currentPath === "/mega-menu" ? "text-custom-green" : ""}`}>
              <Link to="/mega-menu" className="flex items-center">Mega Menu <img src={dropdown} className="mt-1 ml-2" size={20} /></Link>
            </li>
            <li className={`hover:text-custom-green text-[16px] cursor-pointer ${currentPath === "/blog" ? "text-custom-green" : ""}`}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={`hover:text-custom-green cursor-pointer flex items-center text-[16px] ${currentPath === "/pages" ? "text-custom-green" : ""}`}>
              <Link to="/pages" className="flex items-center">Pages <img src={dropdown} className="mt-1 ml-2" size={20} /></Link>
            </li>
            <li className={`hover:text-custom-green text-[16px] cursor-pointer ${currentPath === "/contact" ? "text-custom-green" : ""}`}>
              <Link to="/contact">Contact</Link>
            </li>
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

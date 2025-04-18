import React from 'react'

const HeroRow2 = () => {
  return (
    <nav className="flex flex-wrap justify-center mt-2 p-4">
      <h1 className="w-full text-center sm:text-left sm:w-auto px-4 sm:px-44 sm:-ml-[200px] mt-1 font-quicksand font-bold text-xl sm:text-2xl md:text-3xl">
        Popular Products
      </h1>
      <ul className="flex flex-wrap justify-center sm:justify-start space-x-3 sm:space-x-[22px] mt-3 text-sm sm:text-base md:text-[16px] text-custom-blue">
        <li className="hover:text-custom-green ml-0 sm:ml-10 font-quicksand font-semibold text-custom-green cursor-pointer flex items-center gap-x-2">
          <span className="ml-2 mb-1">All</span>
        </li>
        <li className="hover:text-custom-green cursor-pointer">Milk & Dairies</li>
        <li className="hover:text-custom-green cursor-pointer">Coffees & Teas</li>
        <li className="hover:text-custom-green cursor-pointer">Pet Foods</li>
        <li className="hover:text-custom-green cursor-pointer">Meats</li>
        <li className="hover:text-custom-green cursor-pointer">Vegetables</li>
        <li className="hover:text-custom-green cursor-pointer">Fruits</li>
      </ul>
    </nav>
  );
};

export default HeroRow2;

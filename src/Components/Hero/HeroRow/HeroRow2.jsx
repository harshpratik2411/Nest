import React from 'react'

const HeroRow2 = () => {
          
  return (
    <nav className="flex justify-center   mt-2  p-4 "> 
    <h1 className='px-44 -ml-[200px] mt-1 font-quicksand font-bold text-3xl'> Popular Products</h1> 
      <ul className="flex space-x-[22px] mt-3 text-[16px] text-custom-blue">
        <li className="hover:text-custom-green ml-10 font-quicksand  font-semibold text-custom-green cursor-pointer flex items-center gap-x-3">
          <span className="ml-2 mb-1 ">All</span>
        </li>
        <li className="hover:text-custom-green cursor-pointer">Milk & Dairies </li>
        <li className="hover:text-custom-green cursor-pointer">Coffees & Teas</li>
        <li className="hover:text-custom-green cursor-pointer">Pet Foods</li>
        <li className="hover:text-custom-green cursor-pointer">Meats</li>
        <li className="hover:text-custom-green cursor-pointer">Vegetables</li>
        <li className="hover:text-custom-green cursor-pointer">Fruits</li>
      </ul>
    </nav>
  );
};
        

export default HeroRow2
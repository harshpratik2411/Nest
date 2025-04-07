import React from 'react'

const HeroRow2 = () => {
          
  return (
    <nav className="flex justify-center  mt-2  p-4 "> 
    <h1 className='px-44 -ml-[200px] mt-1 font-quicksand font-bold text-3xl'> Popular Products</h1> 
      <ul className="flex space-x-11 mt-3 text-[16px] text-custom-blue">
        <li className="hover:text-custom-green ml-10 font-quicksand  font-semibold text-custom-green cursor-pointer flex items-center gap-x-4">
          <span className="ml-2">All</span>
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
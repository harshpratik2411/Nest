import React, { useState } from "react"; 
import Filter from '../../../assets/icons/Filter.svg'

const HeroCol2 = () => {  
  const [price, setPrice] = useState(500);
  return (
    <div className="bg-custom-white ml-2 p-6 cursor-pointer rounded-2xl shadow-md border-2 w-[280px]">
      <h2 className="text-lg font-quicksand font-semibold">Fill by price</h2> 
      <h3 className='border-t mt-2 h-[3px] w-[70px]  bg-custom-light-green'></h3>
      <h3 className='border-t h-[2px] opacity-100 text-custom-new-gray '></h3>
      <div className="mt-4">
        <input 
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full fontt-lato accent-custom-green"
        />
        <div className="flex justify-between cursor-pointer text-custom-green peer-checked:text-custom-white text-sm mt-2">
          <span>From: <strong>${price}</strong></span>
          <span>To: <strong>$1,000</strong></span>
        </div>
      </div>

      <div className="mt-4 cursor-pointer">
        <h3 className="font-semibold cursor-pointer font-lato text-custom-new-gray">Color</h3>
        <div className="space-y-2  mt-2">
          {['Red (56)', 'Green (78)', 'Blue (54)'].map((color, index) => {
            const checkboxColor = color.split('white')[0].toLowerCase();
            return (
              <label key={index} className="flex cursor-pointer text-custom-text-gray font-lato items-center space-x-2">
                <input 
                  type="checkbox" 
                  className={`peer accent-${checkboxColor} accent-custom-green cursor-pointer`} 
                />
                <span>{color}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="mt-4 cursor-pointer">
        <h3 className="font-semibold text-custom-new-gray font-lato ">Item Condition</h3>
        <div className="space-y-2 mt-2 ">
          {['New (1506)', 'Refurbished (27)', 'Used (45)'].map((condition, index) => (
            <label key={index} className="flex cursor-pointer text-custom-text-gray items-center font-lato space-x-2">
              <input 
                type="checkbox" 
                className="peer cursor-pointer  accent-custom-green"
              />
              <span>{condition}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="mt-6 bg-custom-green cursor-pointer text-white px-4 py-2 flex items-center rounded-lg w-full">
        <img className=" ml-[70px] mr-2 w-[20px] h-[18px] justify-center items-center " src={Filter} alt="" />  
        Filter
      </button>
    </div>
  );
};

export default HeroCol2;


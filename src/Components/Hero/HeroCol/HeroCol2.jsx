import React, { useState } from "react"; 
import Filter from '../../../assets/icons/Filter.svg'

const HeroCol2 = () => {  
  const [price, setPrice] = useState(500);
  return (
    <div className="bg-custom-white ml-2 p-6 rounded-2xl shadow-md  border-2 w-[280px]">
      <h2 className="text-lg font-quicksand font-semibold">Fill by price</h2>
      <div className="mt-4">
        <input 
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full fontt-lato accent-custom-green"
        />
        <div className="flex justify-between text-custom-green text-sm mt-2">
          <span>From: <strong>${price}</strong></span>
          <span>To: <strong>$1,000</strong></span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold  font-lato text-custom-new-gray">Color</h3>
        <div className="space-y-2 mt-2">
          {['Red (56)', 'Green (78)', 'Blue (54)'].map((color, index) => (
            <label key={index} className="flex text-custom-text-gray font-lato items-center space-x-2">
              <input type="checkbox" className="accent-green-600" />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-custom-new-gray font-lato ">Item Condition</h3>
        <div className="space-y-2 mt-2">
          {['New (1506)', 'Refurbished (27)', 'Used (45)'].map((condition, index) => (
            <label key={index} className="flex text-custom-text-gray items-center font-lato space-x-2">
              <input type="checkbox" className="bg-custom-green" />
              <span>{condition}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="mt-6 bg-custom-green  text-white px-4 py-2 flex items-center rounded-lg w-full">
       <img className=" ml-[70px] w-[15px]h-[12px] justify-center items-center  " src={Filter} alt="" />  Filter</button>
    </div>  
   
  
  );
};

export default HeroCol2;

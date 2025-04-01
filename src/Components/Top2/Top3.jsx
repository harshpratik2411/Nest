import React from "react";
import headphone from '../../assets/icons/headphone.svg';

const Top3 = () => {
  return (
    <div className="flex  items-center  justify-end p-4 bg-custom-white text-custom-blue">
      {/* Headphone Icon */}
      <img className="w-[40px] h-[49px]  ml-20" src={headphone} alt="Headphone Icon" />

      <div className="flex flex-col ml-2">
        <span className="font-bold text-[20px] text-custom-green">1900 - 888</span>
        <span className="text-custom-gray text-sm mb-2">24/7 Support Center</span>
      </div>
    </div>
  );
};

export default Top3;

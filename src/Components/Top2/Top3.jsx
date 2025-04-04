import React from "react";
import headphone from "../../assets/icons/headphone.svg";

const Top3 = () => {
  return (
    <div className="flex  items-center  justify-end  bg-custom-white text-custom-blue">
      {/* Headphone Icon */}
      <img
        className="w-[32px] h-[32px]  ml-20"
        src={headphone}
        alt="Headphone Icon"
      />

      <div className="ml-2">
        <div className="font-bold text-[20px] font-quicksand text-custom-green h-6">
          1900 - 888
        </div>
        <div className="text-custom-new-gray text-sm text-[12px] font-medium font-lato h-4">
          24/7 Support Center
        </div>
      </div>
    </div>
  );
};

export default Top3;

import React from "react";
import allcategory from '../../assets/icons/allcategory.svg'

const Top1 = () => {
  return (
    <div className="p-4 ml-4">
      <button className="flex items-center px-4 py-2 bg-custom-green text-custom-white rounded-md">
        <span className="mr-2"> <img src={allcategory} alt="" />
          </span> Browse All Categories
      </button>
    </div>
  );
};

export default Top1;


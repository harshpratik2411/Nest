import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Top2 = () => {
  const categories = ['All categories'];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row max-w-screen-xl justify-between mt-6 border-2  rounded-md border-custom-light-green w-full sm:w-[700px] h-[55px] items-center p-2">
    <div className="flex space-x-4 overflow-x-auto sm:flex-wrap">
      {categories.map((category, index) => (
        <div key={index} className="px-4 py-2 bg-custom-white text-custom-blue rounded-full cursor-pointer font-semibold relative">
          {category}
          {/* Add the vertical line to the right side of the category */}
          <p className='absolute right-0 top-1/2 transform -translate-y-1/2 text-l text-custom-line'>|</p>
        </div>
      ))}
    </div>

      <div className="flex text-left  bg-custom-white p-2 rounded-lg w-full sm:w-96">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for items.."
          className="w-full  text-custom-gray  rounded-lg text-sm outline-none search-input"
        />
        <FiSearch className="text-gray-600 text-2xl cursor-pointer ml-3" />
      </div>
    </div>
  );
};

export default Top2;

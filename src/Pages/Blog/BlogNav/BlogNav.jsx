 
import React from 'react';
import recipe from '../../../assets/Blog/recipe.svg'; 
import { FiSearch } from 'react-icons/fi';
import  menu from '../../../assets/Blog/menu.svg';
import  sort from '../../../assets/Blog/sort.svg';
import  search from '../../../assets/Blog/search.svg'
const BlogNav = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-4 sm:px-10 py-6 font-quicksand">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img src={recipe} alt="icon" className="w-8 cursor-pointer h-8" />
        <h1 className="text-xl sm:text-2xl font-bold text-custom-blue">Recipes Articles</h1>

      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0">
        {/* Show Dropdown */}
        <div className="flex items-center font-lato border border-custom-white-stroke rounded-md px-3 py-2 bg-white text-sm sm:text-base">
          <img src={menu} className="mr-2 text-custom-gray" />
          <select className="outline-none bg-transparent text-custom-text-gray">
            <option>Show: 50</option>
            <option>Show: 25</option>
            <option>Show: 10</option>
          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center font-lato border border-custom-white-stroke rounded-md px-3 py-2 bg-white text-sm sm:text-base">
          <img src={sort} className="mr-2 text-custom-gray" />
          <select className="outline-none bg-transparent text-custom-text-gray">
            <option>Sort: Featured</option>
            <option>Sort: Newest</option>
            <option>Sort: Oldest</option>
          </select>
        </div>

        {/* Search Box */}
        <div className="flex font-lato items-center  border border-custom-white-stroke rounded-md px-4 py-3 bg-white w-full sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none bg-transparent text-custom-text-gray"
          />
          <img src={search} className="text-custom-gray" />
        </div>
      </div>
    </div>
  );
};

export default BlogNav;

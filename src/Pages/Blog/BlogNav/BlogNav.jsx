import React from 'react';
import recipe from '../../../assets/Blog/recipe.svg'; 
import menu from '../../../assets/Blog/menu.svg';
import sort from '../../../assets/Blog/sort.svg';
import search from '../../../assets/Blog/search.svg';

const BlogNav = () => {
  return (
    <div data-aos="fade-up" className="w-full  px-4 sm:px-10 py-6 font-quicksand">
      {/* Top Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
        
        {/* Recipes Title - Always Visible */}
        <div className="flex items-center space-x-4 justify-center sm:justify-start w-full sm:w-auto">
          <img  src={recipe} alt="icon" className="w-8 h-8 cursor-pointer" />
          <h1 className="text-xl sm:text-2xl font-bold text-custom-blue text-center sm:text-left">
            Recipes Articles
          </h1>
        </div>

        {/* Controls - Hidden on small screens */}
        <div className="hidden sm:flex font-lato  items-center gap-4">
          {/* Show Dropdown */}
          <div className="flex items-center font-lato border border-custom-white-stroke rounded-md px-3 py-2 bg-white text-sm">
            <img src={menu} className="mr-2" alt="menu" />
            <select className="outline-none cursor-pointer bg-transparent text-custom-text-gray">
              <option>Show: 50</option>
              <option>Show: 25</option>
              <option>Show: 10</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center font-lato border border-custom-white-stroke rounded-md px-3 py-2 bg-white text-sm">
            <img src={sort} className="mr-2" alt="sort" />
            <select className="outline-none bg-transparent cursor-pointer text-custom-text-gray">
              <option>Sort: Featured</option>
              <option>Sort: Newest</option>
              <option>Sort: Oldest</option>
            </select>
          </div>

          {/* Search Box */}
          <div className="flex items-center font-lato border border-custom-white-stroke rounded-md px-3 py-2 bg-white w-[200px]">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent text-custom-text-gray w-full"
            />
            <img src={search} className="ml-2 w-4 h-4" alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;

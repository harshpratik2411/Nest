import React from 'react';
import HeroCol1 from '../../../Components/Hero/HeroCol/HeroCol1';

import trendingimg1 from '../../../assets/Blog/trendingimg1.svg';
import trendingimg2 from '../../../assets/Blog/trendingimg2.svg';
import trendingimg3 from '../../../assets/Blog/trendingimg3.svg';
import trendingimg4 from '../../../assets/Blog/trendingimg4.svg';

import galleryimg1 from '../../../assets/Blog/galleryimg1.svg';
import galleryimg2 from '../../../assets/Blog/galleryimg2.svg';
import galleryimg3 from '../../../assets/Blog/galleryimg3.svg';
import galleryimg4 from '../../../assets/Blog/galleryimg4.svg';
import galleryimg5 from '../../../assets/Blog/galleryimg5.svg';
import galleryimg6 from '../../../assets/Blog/galleryimg6.svg';
import cross from '../../../assets/Blog/cross.svg'

 
// NOTE: Using native <img> instead of next/image to avoid SVG fill layout issues

const BlogCol1 = () => {
  const trendingItems = [
    { title: 'Chen Cardigan', price: '$99.50', image: trendingimg1 },
    { title: 'Chen Sweater', price: '$89.50', image: trendingimg2 },
    { title: 'Colorful Jacket', price: '$25', image: trendingimg3 },
    { title: 'Lorem, ipsum', price: '$25', image: trendingimg4 },
  ];

  const galleryImages = [
    galleryimg1,
    galleryimg2,
    galleryimg3,
    galleryimg4,
    galleryimg5,
    galleryimg6,
  ];

  return (
    <div className="flex flex-col gap-6 font-quicksand text-sm text-custom-blue">
      {/* Hero */}
      <HeroCol1 />

      {/* Trending Now */}
      <div className="bg-custom-white  mr-5 w-[280px] h-[500px] mt-2 cursor-pointer ml-3 font-quicksand font-bold items-center border-2 justify-center p-4 rounded-xl shadow-md hidden lg:block">
  <h2 className="text-xl font-quicksand pt-4 font-bold">Trending Now</h2>
  <h3 className="border-t mt-2 h-[3px] w-[70px] cursor-pointer bg-custom-light-green"></h3>
  <h3 className="border-t h-[2px] opacity-100 text-custom-new-gray"></h3>

  <div className="mt-4">
    {trendingItems.map((item, index) => (
      <div key={index} className="mt-4 flex items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-[80px] ml-4 h-[80px]"
        />
        <div className="ml-4 flex cursor-pointer flex-col">
          <h3 className="font-quicksand font-bold text-custom-green">{item.title}</h3>
          <p className="text-custom-new-gray font-lato">{item.price}</p>
          <p className="text-yellow-400">4.5 ⭐️</p> {/* Placeholder rating */}
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Gallery */}
      <div className="bg-custom-white h-[250px]  lg:block hidden  border-2 p-4 rounded-xl shadow-sm w-full max-w-[280px] mx-auto">
  <h2 className="font-bold font-quicksand text-xl mb-4">Gallery</h2>
  <h3 className="border-t mt-2 h-[3px] w-[70px] cursor-pointer bg-custom-light-green"></h3>
  <h3 className="border-t h-[2px] opacity-100 text-custom-new-gray"></h3>
  <div className="grid grid-cols-3 gap-2">
    {galleryImages.map((imgSrc, idx) => (
      <div key={idx} className="aspect-square  overflow-hidden rounded-md">
        <img
          src={imgSrc}
          alt={`Gallery ${idx}`}
          className="w-full mt-4  cursor-pointer bg-custom-white-stroke h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>

      {/* Popular Tags */}

<div className="bg-custom-white  lg:block hidden p-4 border-2 font-quicksand font-bold h-[250px] rounded-xl shadow-md w-full max-w-[280px] mx-auto">
  <h2 className="font-bold text-xl mb-4">Popular Tags</h2> 
  <h3 className="border-t mt-2 h-[3px] w-[70px] cursor-pointer bg-custom-light-green"></h3>
  <h3 className="border-t h-[2px] opacity-100 text-custom-new-gray"></h3>
  <div className="grid grid-cols-2 mt-4  gap-2">
    {['Cabbage', 'Broccoli', 'Smoothie', 'Fruit', 'Salad', 'Appetizer'].map((tag, i) => (
      <button
        key={i}
        className="flex shadow-md items-center bg-custom-white-stroke text-custom-green px-3 py-2 rounded-full text-xs font-semibold hover:bg-custom-light-green transition"
      >
        <img src={cross} alt="Remove tag" className="w-3 h-3 mr-2" />
        <span>{tag}</span>
      </button>
    ))}
  </div>
</div>
       
    </div>
  );
};

export default BlogCol1;

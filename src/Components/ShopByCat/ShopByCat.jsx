import React from 'react';
import Img1 from '../../assets/ShopByCat/Img1.svg';
import Img2 from '../../assets/ShopByCat/Img2.svg';
import Img3 from '../../assets/ShopByCat/Img3.svg';
import Img4 from '../../assets/ShopByCat/Img4.svg';
import Img5 from '../../assets/ShopByCat/Img5.svg';
import Img6 from '../../assets/ShopByCat/Img6.svg';
import Img7 from '../../assets/ShopByCat/Img7.svg';
import Img8 from '../../assets/ShopByCat/Img8.svg';
import LeftArrow from '../../assets/ShopByCat/LeftArrow.svg';
import RightArrow from '../../assets/ShopByCat/RightArrow.svg';
import Greaterthen from '../../assets/ShopByCat/Greaterthen.svg'

const categories = [ 
    
  { label: 'Milks and Dairies', icon: Img1 },
  { label: 'Wines & Alcohol', icon: Img2 },
  { label: 'Clothing & Beauty', icon: Img3 },
  { label: 'Pet Foods & Toy', icon: Img4 },
  { label: 'Packaged fast food', icon: Img5 },
  { label: 'Baking material', icon: Img6 },
  { label: 'Vegetables & tubers', icon: Img7 },
  { label: 'Fresh Seafood', icon: Img8 },
];

const ShopByCat = () => {  
    
  return ( 
    <div className="w-full space-x-2 py-6 px-6">
      <div className="flex items-center   justify-between mb-6">
        <h2 className="text-2xl ml-3 font-bold text-[32px] cursor-pointer font-quicksand text-custom-blue"> 
          Shop by Categories 
        </h2>   
          <p className='-ml-[950px] flex  items-center cursor-pointer font-lato text-custom-gray opacity-100 mt-2'>All Categories
            <img className='ml-4 mt-1 opacity-100' src={Greaterthen} alt="" />
          </p>
        <button className='flex items-center gap-4 '>
         <img className='w-[25px] py-2 px-1 text-center  rounded-xl  bg-custom-white-stroke' src={LeftArrow}  />
         <img className='w-[25px] py-2 px-1 ml-3 text-center   rounded-xl bg-custom-white-stroke mr-12' src={RightArrow}  />
        </button>
      </div>
       
      <div className="grid grid-cols-2 sm:grid-cols-3    md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
        {categories.map((cat, idx) => ( 
          <div
            key={idx}
            className="flex  transition-transform duration-300 ease-in-out hover:scale-105 flex-col cursor-pointer bg-custom-white-fillstroke items-center justify-center p-4 rounded-lg border border-custom-white-strokehover:shadow-md mr-8 "
            > 
            <img src={cat.icon} alt={cat.label} className="w-[120px]  h-[90px] mb-2" />
            <p className="text-[17px] w-[100px] font-quicksand font-bold text-custom-blue text-center">{cat.label}</p>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default ShopByCat;

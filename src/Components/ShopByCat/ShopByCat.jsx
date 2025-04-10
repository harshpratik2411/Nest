import React from 'react';
import Img1 from '../../assets/ShopByCat/Img1.svg';
import Img2 from '../../assets/ShopByCat/Img2.svg';
import Img3 from '../../assets/ShopByCat/Img3.svg';
import Img4 from '../../assets/ShopByCat/Img4.svg';
import Img5 from '../../assets/ShopByCat/Img5.svg';
import Img6 from '../../assets/ShopByCat/Img6.svg';
import Img7 from '../../assets/ShopByCat/Img7.svg';
import Img8 from '../../assets/ShopByCat/Img8.svg';
import Icon1 from '../../assets/ShopByCat/Icon1.svg';
import Icon2 from '../../assets/ShopByCat/Icon2.svg';

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
    <div className="w-full h-full py-10 px-6">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold ml-2 text-[32px] font-quicksand text-custom-blue">
      Shop by Categories
    </h2>  

    <div className="flex items-center text-custom-new-gray gap-2">
      <img className='itmes-center text-center' src={Icon1} />
      <img src={Icon2} />
    </div>
  </div>


        {/* <h3>All Categories</h3> */}
     
      <div className="grid grid-cols-2sm:grid-cols-3 drop-shadow-md md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 h-[210px] gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-custom-white-fillstroke items-center justify-center p-4 rounded-lg border border-custom-white-strokehover:shadow-md transition"
          >
            <img src={cat.icon} alt={cat.label} className="w-[120px] h-[90px]  mb-2" />
            <p className="text-[17px]  w-[100px] font-quicksand font-bold text-custom-blue text-center">{cat.label}</p>
          </div>
        ))}
      </div>
    </div> 
   
  );
};

export default ShopByCat;

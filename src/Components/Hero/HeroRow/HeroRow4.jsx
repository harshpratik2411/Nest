import React from 'react';
import Img1 from '../../../assets/Deals/Img1.svg';
import Img2 from '../../../assets/Deals/Img2.svg';
import Img3 from '../../../assets/Deals/Img3.svg';
import Img4 from '../../../assets/Deals/Img4.svg';
import CartIcon from "../../../assets/Popular-pro/cart.svg";
import Arrow from '../../../assets/icons/Arrow.svg'

const deals = [
  {
    id: 1,
    img: Img1,
    days: 426,
    title: 'Seeds of Change Organic Quinoa, Brown',
    rating: '(4.0)',
    brand: 'NestFood',
    price: 32.85,
    originalPrice: 33.8,
  },
  {
    id: 2,
    img: Img2,
    days: 822,
    title: 'Perdue Simply Smart Organics Gluten',
    rating: '(4.0)',
    brand: 'Old El Paso',
    price: 24.85,
    originalPrice: 26.8,
  },
  {
    id: 3,
    img: Img3,
    days: 1156,
    title: 'Signature Wood-Fired corn Mushroom',
    rating: '(3.0)',
    brand: 'Progresso',
    price: 12.85,
    originalPrice: 13.8,
  },
  {
    id: 4,
    img: Img4,
    days: 398,
    title: 'Simply Lemonade with Raspberry Juice',
    rating: '(3.0)',
    brand: 'Yoplait',
    price: 15.85,
    originalPrice: 16.8,
  },
];

const HeroRow4 = () => {
  return (
    <div className=" py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl ml-3 font-bold font-quicksand text-custom-blue">Deals Of The Day</h2>
        <a href="#" className="text-custom-text-gray font-lato w-[65px] text-sm"/>
        <div className="flex text-custom-new-gray items-center ml-16">
  All Deals
  <img className="w-[12px] h-[12px] ml-2" src={Arrow} alt="" />
</div>

      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 h-[400px]  gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-custom-white rounded-2xl mb-96  shadow-md overflow-visible relative"
          >
            <div className="relative ">
              <div className="relative "> 
                <img src={deal.img} alt={deal.title} className="w-[304px] h-[270px]   font-quicksand font-bold text-custom-blue object-cover" />
                
                {/* Countdown Section */}
                <div className="absolute bottom-2 space-x-3 left-2 flex  ml-5 text-center text-sm z-10">
                  <div className="bg-custom-white  px-2 items-center mb-24  w-[52px] h-[65px] font-quicksand text-md font-medium py-1 rounded">
                    <p className="text-custom-green m-1 font-semibold">{deal.days}</p>
                    <p className="  font-lato text-custom-text-lightgray">Days</p>
                  </div>
                  <div className="bg-custom-white  px-2 items-center  w-[52px] h-[65px] font-quicksand text-md font-medium py-1 rounded">
                    <p className="text-custom-green m-1 font-semibold">08</p>
                    <p className=" font-lato text-custom-text-lightgray">Hours</p>
                  </div>
                  <div className="bg-custom-white px-2 items-center  w-[52px] h-[65px] font-quicksand text-md font-medium py-1 rounded">
                    <p className="text-custom-green m-1 font-semibold">17</p>
                    <p className=" font-lato text-custom-text-lightgray">Mins</p>
                  </div>
                  <div className="bg-custom-white px-2 items-center  w-[52px] h-[65px] font-quicksand text-md font-medium py-1 rounded">
                    <p className="text-custom-green m-1 font-semibold">59</p>
                    <p className= "font-lato text-custom-text-lightgray">Sec</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 px-4 translate-y-1/2 z-10">
              <div className="bg-custom-white  rounded-2xl p-4 shadow-md">
                <h3 className="font-semibold text-custom-blue mb-1 leading-tight">
                  {deal.title}
                </h3>
                <p className="text-custom-text-lightgray mb-1">
            <span className="mr-20 mb-1 text-yellow-400  font-lato">★</span>
            {deal.rating}
          </p>
          <p className="text-xs mb-2">
  <span className="text-custom-gray mt-1 opacity-100">By</span>
   <span className="text-custom-green ml-1">{deal.brand}</span>
</p>
<div className="flex items-center justify-between"> 
  <div>

                    <span className="text-custom-green font-quicksand font-bold text-lg">${deal.price}</span>
                    <span className="text-custom-gray font-quicksand font-bold line-through ml-2 text-sm">${deal.originalPrice}</span>
                  </div>
                  <button className="bg-custom-button-light-green text-custom-green font-medium px-4 py-1 rounded flex items-center">
                    <img src={CartIcon} className="h-[20px]" />
                    <span className="text-custom-green font-lato bold cursor-pointer pl-1">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroRow4;

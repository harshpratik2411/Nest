import React from 'react';
import Image1 from '../../../assets/Deals2/Img1.svg';
import Image2 from '../../../assets/Deals2/Img2.svg';
import Image3 from '../../../assets/Deals2/Img3.svg';

const HeroRow5 = () => {
  const cards = [
    {
      image: Image1,
      title: 'Everyday Fresh & Clean  with Our Products',
    },
    {
      image: Image2,
      title: 'Make your Breakfast Healthy and Easy',
    },
    {
      image: Image3,
      title: 'The best Organic Products We Have Online',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row px-2 gap-4 p-4 mr-[23px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-full md:w-1/2 h-[250px] rounded-xl overflow-hidden shadow-sm"
        >
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
            <div className="text-custom-blue w-[200px] text-[22px] font-semibold mb-8 p-2 rounded-md">
              {card.title}
            </div>
            <button className="bg-custom-green text-custom-white font-quicksand px-4 py-2 rounded-md text-sm font-bold">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroRow5;

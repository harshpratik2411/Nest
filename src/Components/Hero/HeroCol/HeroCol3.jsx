import React from 'react';
import Img1 from '../../../assets/Products/Img1.svg';
import Img2 from '../../../assets/Products/Img2.svg';
import Img3 from '../../../assets/Products/Img3.svg';

const HeroCol3 = () => {
  const products = [
    {
      id: 1,
      image: Img3,
      name: 'Fruits',
      price: '$29.99',
      rating: 4.5,
    },
    {
      id: 2,
      image: Img2,
      name: 'Veggies',
      price: '$19.99',
      rating: 4.0,
    },
    {
      id: 3,
      image: Img3,
      name: 'Fruits',
      price: '$39.99',
      rating: 5.0,
    },
  ];

  return (
    <div className="bg-custom-white w-[280px] mt-2 cursor-pointer  ml-2 items-center border-2  justify-center p-4 rounded-xl shadow-md">
      <h2 className="text-xl  font-quicksand font-bold">New Products</h2> 
      <h3 className='border-t mt-2 h-[3px] w-[70px]  bg-custom-light-green'></h3>
      <h3 className='border-t h-[2px] opacity-100  text-custom-new-gray '></h3>
      <div className="mt-4">
       
        {products.map((product) => ( 
          <div key={product.id} className="mt-4 flex items-center">
            <img src={product.image} alt={product.name} className="w-[80px] ml-4 h-[80px]" />
            <div className="ml-4 flex flex-col">
              <h3 className="font-quicksand font-bold text-custom-green">{product.name}</h3>
              <p className="text-custom-new-gray font-lato">{product.price}</p>
              <p className="text-yellow-400 "> {product.rating} ⭐️</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCol3;

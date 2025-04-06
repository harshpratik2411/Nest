import React from 'react'; 
import milk from '../../../assets/Category/milk.svg'
import clothing from '../../../assets/Category/clothing.svg'
import fruits from '../../../assets/Category/fruits.svg'
import baking from '../../../assets/Category/baking-material.svg'
import petfood from '../../../assets/Category/petfood.svg'

const categories = [
  { name: 'Milks & dairies', image: milk, count: 3 },
  { name: 'Clothing', image: clothing, count: 4 },
  { name: 'Pet Foods', image: petfood, count: 5 },
  { name: 'Baking Material', image: baking, count: 8 },
  { name: 'Fresh', image: fruits, count: 10 },
];

const CategoryItem = ({ name, image, count }) => (
  <div className="p-3 bg-custom-white border-2 border-custom-white-stroke opacity-100 font-lato text-custom-blue rounded-lg flex items-center justify-between">
    <div className='flex items-center'>
      <img className='w-[30px] h-[30px] mr-2' src={image} alt={name} />
      <span className='text-[16px] ml-2 font-lato'>{name}</span>
    </div>
    <h2 className='text-right rounded-full opacity-100 w-[24px] h-[24px] bg-custom-light-green pr-2'>{count}</h2>
  </div>
);

const HeroCol1 = () => {
  return ( 
    <div className="flex flex-col space-y-6 w-[300px] p-4 bg-custom-white">
      <div className="text-xl font-quicksand ml-1 font-bold text-custom-blue">Category
        <h3 className='border-t mt-2 h-[3px] w-[70px]  bg-custom-light-green'></h3>
        <h3 className='border-t h-[2px] opacity-100  text-custom-new-gray '></h3>
      </div>
      <div className="flex flex-col w-[270px] space-y-2">
        {categories.map((category, index) => (
          <CategoryItem 
            key={index} 
            name={category.name} 
            image={category.image} 
            count={category.count} 
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCol1;

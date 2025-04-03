import React from 'react'; 
import milk from '../../assets/Category/milk.svg'
import clothing from '../../assets/Category/clothing.svg'
import fruits from '../../assets/Category/fruits.svg'
import baking from '../../assets/Category/baking-material.svg'
import petfood from '../../assets/Category/petfood.svg'

const Hero1 = () => {
  return ( 
    <div className="flex flex-col space-y-6 w-[300px] p-4 bg-custom-white">
      <div className="text-xl  font-quicksand ml-1 font-bold text-custom-blue">Category
        <h3 className='border-t mt-2 h-[3px] w-[70px]  bg-custom-light-green'></h3>
        <h3 className='border-t h-[2px] opacity-100  text-custom-new-gray '></h3>
       
      </div>
      <div className="flex flex-col w-[270px] space-y-2">
        <div className="p-3 bg-custom-white border-2 border-custom-white-stroke opacity-100 font-lato text-custom-blue rounded-lg flex items-center justify-between">
          <div className='flex items-center'>
            <img className='w-[30px] h-[30px] mr-2' src={milk} alt="" />
            <span className='text-[16px] ml-2 font-lato'>Milks & dairies</span>
          </div>
          <h2 className='text-right rounded-full opacity-100 w-[24px] h-[24px] bg-custom-light-green pr-2'>3</h2>
        </div>
        <div className="p-3 bg-custom-white border-custom-white-stroke border-2 opacity-100 font-lato text-custom-blue rounded-lg flex items-center justify-between">
          <div className='flex items-center'>
            <img className='w-[30px] h-[30px] mr-2' src={clothing} alt="" />
            <span className='text-[16px]  ml-2 font-lato'>Clothing</span>
          </div>
          <h2 className='text-right rounded-full opacity-100 w-[24px] h-[24px] bg-custom-light-green pr-2'>4</h2>
        </div>
        <div className="p-3 bg-custom-white border-custom-white-stroke border-2 opacity-100 font-lato text-custom-blue rounded-lg flex items-center justify-between">
          <div className='flex items-center'>
            <img className='w-[30px] h-[30px] mr-2' src={petfood} alt="" />
            <span className='text-[16px] ml-2 font-lato'>Pet Foods</span>
          </div>
          <h2 className='text-right rounded-full opacity-100 w-[24px] h-[24px] bg-custom-light-green pr-2'>5</h2>
        </div>
        <div className="p-3 bg-custom-white border-2 border-custom-white-stroke opacity-100 font-lato text-custom-blue rounded-lg flex items-center justify-between">
          <div className='flex items-center'>
            <img className='w-[30px] h-[30px] mr-2' src={baking} alt="" />
            <span className='text-[16px] ml-2 font-lato'>Baking Material</span>
          </div>
          <h2 className="text-right rounded-full opacity-100 w-[24px] h-[24px] bg-custom-light-green pr-2">8</h2>
        </div>
        <div className="p-3 bg-custom-white border-custom-white-stroke border-2 opacity-100 font-lato text-custom-blue rounded-lg flex items-center justify-between">
          <div className='flex items-center'>
            <img className='w-[30px] h-[30px] mr-2' src={fruits} alt="" />
            <span className='text-[16px] ml-2 font-lato'>Fresh</span>
          </div>
          <h2 className="text-right rounded-full opacity-100 w-[25px] h-[25px] bg-custom-light-green pr-2 pl-[3px]">10</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero1;

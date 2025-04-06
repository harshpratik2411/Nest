import React from 'react';
import HeroRowMain from '../../Hero/HeroMain/HeroRowMain'
import HeroColMain from '../..//Hero/HeroMain/HeroColMain';


const HeroMain = () => {
  return (
    <div className='flex '>
         <HeroColMain/>
         <HeroRowMain/> 
    </div>
  );
};

export default HeroMain;

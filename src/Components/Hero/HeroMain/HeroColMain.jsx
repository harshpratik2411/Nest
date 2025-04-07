import React from 'react'
import HeroCol1 from '../HeroCol/HeroCol1'
import HeroCol2 from '../HeroCol/HeroCol2'
import HeroCol3 from '../HeroCol/HeroCol3'

const HeroMain = () => {
  return (
    <div className='flex flex-col'>
     <HeroCol1/> 
     <HeroCol2/>
     <HeroCol3/>

    </div>
  )
}

export default HeroMain
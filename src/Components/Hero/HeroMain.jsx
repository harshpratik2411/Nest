import React from 'react'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
// import Hero3 from './Hero3'

const HeroMain = () => {
  return (
    <div className='flex'>
     <Hero1/> 
     <Hero2/>  
     {/* <Hero3/> */}
    </div>
  )
}

export default HeroMain
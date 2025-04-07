import React from 'react'
import Img1 from '../../../assets/Deals/Img1.svg'
import Img2 from '../../../assets/Deals/Img2.svg'
import Img3 from '../../../assets/Deals/Img3.svg'
import Img4 from '../../../assets/Deals/Img4.svg'


const HeroRow4 = () => {
  return (
    <div className="grid grid-cols-4  gap-4">
      <div  className="bg-gray-200 w-[300px] h-[400px] p-4"> 
        <img className='w-[500px] h-[400px]' src={Img1} alt="" />
        </div>
      <div className="bg-gray-200  w-[300px] h-[400px] p-4">
      <img src={Img2} alt="" />Column 2</div>
      <div className="bg-gray-200  w-[300px] h-[400px] p-4">
      <img src={Img3} alt="" />Column 3</div>
      <div className="bg-gray-200  w-[300px] h-[400px] p-4">
      <img src={Img4} alt="" />Column 4</div>
    </div>
  )
}

export default HeroRow4

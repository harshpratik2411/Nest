import React from 'react'
import Top1 from './Top1'
import Top2 from './Top2'
import Top3 from './Top3'

const Top2Main = () => {
  return (
    <div className='flex space-x-6 border-2 align-middle  items-center mt-4 bg-custom-white h-[60px]'>
    <Top1/>
     <Top2/>
    <Top3/>
    </div>
  )
}

export default Top2Main
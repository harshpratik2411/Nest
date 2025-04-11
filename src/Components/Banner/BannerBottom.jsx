import React from 'react'
import Banner from '../../assets/Banner/Banner.png'

const BannerBottom = () => {
  return (
    <div className='mr-12 ml-4 '>
        <section className="relative w-full h-[410px] ml-3 mt-4 rounded-xl py-16 px-8 flex  justify-center items-center">
              <img src={Banner} alt="" className="absolute rounded-lg  inset-0 w-full h-full object-cover" />
              <div className="relative max-w-4xl text-center text-white">
                <h1 className="text-4xl font-quicksand -ml-[390px] font-bold w-[650px] h-[130px] text-custom-blue py-4 mx-auto text-left">
                 Stay home & get your daily needsrom our shop 
                </h1>
                <p className="text-xl font-lato flex text-custom-new-gray -ml-[386px] cursor-pointer  mb-6">Start your's daily Shopping with 
                 <p className='ml-1 font-lato text-custom-green'>Nest Mart</p>
                  </p>
                <div className="flex justify-center items-center -ml-[390px] mt-2 bg-custom-white rounded-full shadow-md max-w-md mx-auto overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 outline-none text-custom-blue"
                    />
                  <button className="bg-custom-green cursor-pointer text-custom-white px-6 py-3 rounded-full font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>
        
    </div>
  )
}

export default BannerBottom
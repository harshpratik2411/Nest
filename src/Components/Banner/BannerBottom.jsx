import React from 'react'
import Banner from '../../assets/Banner/Banner.png'

const BannerBottom = () => {
  return (
    <div className='ml-9 mr-4 sm:mr-8 flex-wrap'>
      <section className="relative w-full lg:h-auto sm:h-[420px] mt-4 rounded-xl py-8 sm:py-16 px-4 sm:px-8 flex flex-col sm:flex-row justify-center items-center">
        <img src={Banner} alt="" className="absolute rounded-lg inset-0 w-full h-full sm:object-cover lg:objext-cover" />
        <div className="relative max-w-full sm:max-w-4xl text-center text-white">
          <h1 className="text-2xl sm:text-4xl  font-quicksand font-bold w-full sm:w-[650px] h-auto sm:h-[130px] text-custom-blue py-4 mx-auto text-center sm:text-left sm:-ml-[390px]">
            Stay home & get your daily needs from our shop
          </h1>
          <p className="text-sm sm:text-xl font-lato text-custom-new-gray flex justify-center sm:justify-start cursor-pointer mb-4 sm:mb-6 sm:-ml-[386px]">
            Start your daily shopping with 
            <span className='ml-1 font-lato text-custom-green'>Nest Mart</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:-ml-[390px] mt-4 sm:mt-2 bg-custom-white rounded-full shadow-md max-w-full sm:max-w-md mx-auto overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 sm:py-3 outline-none text-custom-blue w-full sm:w-full"
            />
            <button className="bg-custom-green cursor-pointer text-custom-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium w-full sm:w-auto mt-2 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerBottom
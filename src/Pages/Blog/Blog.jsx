import React from 'react'
import banner from '../../assets/Blog/banner.png'
import TopNav1 from '../../Components/TopNav1/TopNav1'
import TopNav2 from '../../Components/TopNav2/TopNav2'
import Footer from '../../Components/Footer/Footer' 


const Blog = () => {
  return (
    <> 
    <TopNav1/>
    <TopNav2/>
        <section className="relative  lg:w-full  lg:h-[430px] sm:w-[790px] sm:h-[450px] mr-3  mt-4 rounded-lg py-16 px-8 flex flex-wrap justify-center items-center">
                      <img src={banner} alt="" className="absolute  inset-0 w-full  h-full object-cover" />
                      <div className="relative max-w-4xl text-center text-white">
                        <h1 className="lg:text-5xl sm:text-2xl font-quicksand lg:-ml-[390px] sm:-ml-[20px] font-bold lg:w-[650px] lg:h-[130px] sm:w-[380px] sm:h-[80px] text-custom-blue py-4 mx-auto text-left">
                          Don’t miss amazing <br /> grocery deals
                        </h1>
                        <p className="lg:text-xl sm:text-base font-lato text-custom-new-gray lg:-ml-[760px] -ml-[103px] cursor-pointer  mb-6">Sign up for the daily newsletter</p>
                        <div className="flex justify-center items-center lg:-ml-[390px] -ml-2 mr-3  mt-2 bg-custom-white rounded-full shadow-md lg:max-w-md sm:max-w-sm mx-auto overflow-hidden">
                              <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4  py-3 outline-none  text-custom-blue"
                                /> 
                                <button className="bg-custom-green   lg:w-auto lg:ml-2  cursor-pointer text-custom-white px-6 py-3 rounded-full font-medium">
                                Subscribe
                              </button> 
                             </div>
                      </div>
                    </section>  
                    <Footer/>
    </>
  )
}

export default Blog
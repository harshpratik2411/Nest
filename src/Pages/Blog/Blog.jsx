import React from "react";
import banner from "../../assets/Blog/banner.png";
import TopNav1 from "../../Components/TopNav1/TopNav1";
import TopNav2 from "../../Components/TopNav2/TopNav2";
import Footer from "../../Components/Footer/Footer";
import home from "../../assets/Blog/home.svg";
import cross from "../../assets/Blog/cross.svg";
import Navbar from "../../Components/Navbar/Navbar";


const Blog = () => {
  return (
    <> 
    <Navbar/>
      <TopNav1 />
      <TopNav2 />
      <section className="relative  lg:w-full  lg:h-[240px] sm:w-[790px] sm:h-[450px] mr-3  mt-4 rounded-lg py-16 px-8 flex flex-wrap justify-center items-center">
        <img
          src={banner}
          alt=""
          className="absolute  inset-0 w-full  h-full object-cover"
        />
        <div className="relative max-w-4xl text-center">
          <h1 className="lg:text-5xl sm:text-2xl font-quicksand lg:-ml-[390px] sm:-ml-[20px] font-bold lg:w-[650px] lg:h-[130px] sm:w-[380px] sm:h-[80px] text-custom-blue py-4 mx-auto text-left">
            Blog & News
          </h1>

          <h3 className="flex space-x-6 font-lato -mt-[50px] cursor-pointer font-semibold -ml-[387px]">
            <div className="flex ">
              <img className="w-[18px] mt-[2px] h-[18px] " src={home} />
              <h3 className="  ml-2   text-custom-green">Home</h3>
            </div>
            <h3>Blog & News</h3>
          </h3>
          <div className="absolute top-0 left-0 sm:left-[150px] w-full sm:w-[1250px] h-[200px] sm:h-[300px] -mt-[80px] -ml-[330px] flex items-center justify-center z-20">
  <div className="flex flex-wrap justify-center sm:space-x-6 space-x-3  text-black text-sm sm:text-xl font-semibold">
    {["Shopping", "Recipes", "Kitchen", "News", "Feed"].map((label, idx) => (
      <div key={idx} className="text-center">
        <button className="text-md  shadow-md font-quicksand font-bold text-custom-green cursor-pointer w-[140px] rounded-3xl py-2 px-3  bg-custom-white sm:text-sm flex items-center justify-center space-x-2">
          <img src={cross} className="-ml-3" alt="cross" />
          <span >{label}</span>
        </button>
      </div>
    ))}
  </div>
</div>
        
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;

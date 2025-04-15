import React from "react";
import Banner from "../../../assets/icons/Banner.png";

const HeroRow1 = () => {
  return (
     
    <section className="relative w-[1130px] h-[530px] ml-2 mt-4 rounded-lg py-16 px-8 flex justify-center items-center">
      <img src={Banner} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative max-w-4xl text-center text-white">
        <h1 className="text-5xl font-quicksand -ml-[390px] font-bold w-[650px] h-[130px] text-custom-blue py-4 mx-auto text-left">
          Don’t miss amazing <br /> grocery deals
        </h1>
        <p className="text-xl font-lato text-custom-new-gray -ml-[760px] cursor-pointer  mb-6">Sign up for the daily newsletter</p>
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

  );
};

export default HeroRow1;
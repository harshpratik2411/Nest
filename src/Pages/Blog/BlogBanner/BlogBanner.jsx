import React from "react";
import banner from "../../../assets/Blog/banner.png";
import cross from "../../../assets/Blog/cross.svg";
import home from "../../../assets/Blog/home.svg";

const tags = ["Shopping", "Recips", "Kitchen", "News", "Food"];

const BlogBanner = () => {
  return (
    <div data-aos="fade-up"
      className="rounded-[20px] h-auto lg:h-[200px] bg-[#E7F3EB] p-6 sm:p-4 lg:p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      {/* Title and Tags */}
      <div className="flex flex-col lg:flex-row justify-between items-start flex-wrap mb-4">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-quicksand mt-2 sm:mt-4 lg:mt-6 font-bold text-custom-blue mb-2 lg:mb-4">
          Blog & News
        </h1>

        {/* Filter Tags */}
        <div className="flex flex-wrap   gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 lg:mt-10">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="flex font-quicksand font-bold items-center gap-1 sm:gap-2 bg-white shadow-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm cursor-pointer text-gray-800"
            >
              <img src={cross} alt="remove" className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <span className={tag === "Recips" ? "text-gray-800" : "text-custom-green"}>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center mt-2 lg:-mt-[20px] text-xs sm:text-sm text-gray-600">
        <img src={home} alt="home" className="text-custom-green cursor-pointer font-lato mr-1 w-3.5 sm:w-4 h-3.5 sm:h-4" />
        <span className="text-custom-green mt-0.5">Home</span>
        <span className="mx-1 sm:mx-2">›</span>
        <span className="text-custom-new-gray font-lato font-semibold">Blog & News</span>
      </div>
    </div>
  );
};

export default BlogBanner;

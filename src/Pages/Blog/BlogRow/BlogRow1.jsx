import React from "react";
import banner from '../../../assets/Blog/banner.png'
import TopNav1 from "../../../Components/TopNav1/TopNav1";
import TopNav2 from "../../../Components/TopNav2/TopNav2";
import Footer from "../../../Components/Footer/Footer";
import home from "../../../assets/Blog/home.svg";
import cross from "../../../assets/Blog/cross.svg";
import Navbar from "../../../Components/Navbar/Navbar";
import image1 from  '../../../assets/Blog/img1.svg'
import image2 from  '../../../assets/Blog/img2.svg'
import image3 from  '../../../assets/Blog/img3.svg'
import image4 from  '../../../assets/Blog/img4.svg'
import image5 from  '../../../assets/Blog/img5.svg'
import image6 from  '../../../assets/Blog/img6.svg'
import image7 from  '../../../assets/Blog/img7.svg'
import image8 from  '../../../assets/Blog/img8.svg'
import image9 from  '../../../assets/Blog/img9.svg'
import image10 from  '../../../assets/Blog/img10.svg'
import image11 from  '../../../assets/Blog/img11.svg'
import image12 from  '../../../assets/Blog/img12.svg'
import image13 from  '../../../assets/Blog/img13.svg'
import image14 from  '../../../assets/Blog/img14.svg'
import image15 from  '../../../assets/Blog/img15.svg'
import recipe from  '../../../assets/Blog/recipe.svg'
const articles = [
  {
    image: image1,
    category: 'Side Dish',
    title: 'The Intermediate Guide to Healthy Food',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image2,
    category: 'Soups and Stews',
    title: 'Summer Quinoa Salad in Jars with Lemon',
    date: '25 April 2022',
    views: '126k Views',
    readTime: '4 mins read',
  },
  {
    image: image3,
    category: 'Dessert',
    title: 'Harissa Chickpeas with Whipped Feta',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image4,
    category: 'Breakfast',
    title: 'Almond Butter Chocolate Chip Zucchini Bars',
    date: '25 April 2022',
    views: '126k Views',
    readTime: '4 mins read',
  },
  {
    image: image5,
    category: 'Gluten Free',
    title: 'Sticky Ginger Rice Bowls with Pickled Veg',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image6,
    category: 'Side Dish',
    title: 'Creamy Garlic Sun-Dried Tomato Pasta',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image7,
    category: 'Breakfast',
    title: 'Almond Butter Chocolate Chip Zucchini Bars',
    date: '25 April 2022',
    views: '126k Views',
    readTime: '4 mins read',
  },
  {
    image: image8,
    category: 'Gluten Free',
    title: 'Sticky Ginger Rice Bowls with Pickled Veg',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image9,
    category: 'Side Dish',
    title: 'Creamy Garlic Sun-Dried Tomato Pasta',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image10,
    category: 'Breakfast',
    title: 'Almond Butter Chocolate Chip Zucchini Bars',
    date: '25 April 2022',
    views: '126k Views',
    readTime: '4 mins read',
  },
  {
    image: image11,
    category: 'Gluten Free',
    title: 'Sticky Ginger Rice Bowls with Pickled Veg',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image12,
    category: 'Side Dish',
    title: 'Creamy Garlic Sun-Dried Tomato Pasta',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image13,
    category: 'Side Dish',
    title: 'Creamy Garlic Sun-Dried Tomato Pasta',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image14,
    category: 'Side Dish',
    title: 'Creamy Garlic Sun-Dried Tomato Pasta',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  {
    image: image15,
    category: 'Side Dish',
    title: 'Creamy Garlic Sun-Dried Tomato Pasta',
    date: '25 April 2022',
    views: '124k Views',
    readTime: '4 mins read',
  },
  
];

const BlogRow1 = () => { 
  return (
    <> 
      {/* <section className="relative  lg:w-full  lg:h-[240px] sm:w-[790px] sm:h-[450px] mr-3  mt-4 rounded-lg py-16 px-8 flex flex-wrap justify-center items-center">
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
          </h3> */}
          {/* <div className="absolute top-0 left-0 sm:left-[150px] w-full sm:w-[1250px] h-[200px] sm:h-[300px] -mt-[80px] -ml-[330px] flex items-center justify-center z-20">
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
</div> */}
        
        {/* </div>
      </section>   */}
      <section>
      {/* Header with Icon and Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      

      {/* Articles Grid */}
      <div className="px-4  py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="space-y-2">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-custom-text-lightgray font-quicksand">
              {article.category}
            </p>
            <h3 className="font-quicksand text-custom-blue font-bold leading-snug">
              {article.title}
            </h3>
            <p className="text-custom-text-lightgray text-sm font-lato">
              {article.date} &nbsp;•&nbsp; {article.views} &nbsp;•&nbsp; {article.readTime}
            </p>
          </div> 
         
        ))}
      </div>
    </div> 
    </div>
      </section>
     
    </>
  );
};

export default BlogRow1;

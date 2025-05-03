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
      <section>
        {/* Optional header area — currently hidden/commented out */}

        {/* Responsive container (flex for sm, stays default for lg) */}
        <div  className="flex flex-col  sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"></div>

        {/* Responsive grid for articles */}
        <div className="px-4 py-8">
          <div data-aos="fade-up" className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="space-y-2">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full transition-all transform hover:scale-110 cursor-pointer h-auto rounded-lg"
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
      </section>
    </>
  );
};

export default BlogRow1;

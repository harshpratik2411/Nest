import React from 'react';
import Img1 from '../../assets/TrendingProducts/Img1.svg';
import Img2 from '../../assets/TrendingProducts/Img2.svg';
import Img3 from '../../assets/TrendingProducts/Img3.svg';
import Img4 from '../../assets/TrendingProducts/Img4.svg';
import Img5 from '../../assets/TrendingProducts/Img5.svg';
import Img6 from '../../assets/TrendingProducts/Img6.svg';
import Img7 from '../../assets/TrendingProducts/Img7.svg';
import Img8 from '../../assets/TrendingProducts/Img8.svg';
import Img9 from '../../assets/TrendingProducts/Img9.svg';
import Img10 from '../../assets/TrendingProducts/Img10.svg';
import Img11 from '../../assets/TrendingProducts/Img11.svg';
import Img12 from '../../assets/TrendingProducts/Img12.svg';

const productSections = [
  { category: 'Top Selling', products: [
    { id: 1, image: Img1, title: 'Nestle Original Coffee-Mate Coffee Creamer', price: '$32.85', oldPrice: '$33.8', rating: '4.0' },
    { id: 2, image: Img2, title: 'Nestle Original Coffee-Mate Coffee Creamer', price: '$32.85', oldPrice: '$33.8', rating: '3.0' },
    { id: 3, image: Img3, title: 'Nestle Original Coffee-Mate Coffee Creamer', price: '$32.85', oldPrice: '$33.8', rating: '4.0' },
  ]},
  { category: 'Trending Products', products: [
    { id: 4, image: Img4, title: 'Organic Cage-Free Grade A Large Brown Eggs', price: '$32.85', oldPrice: '$33.8', rating: '4.0' },
    { id: 5, image: Img5, title: 'Seeds of Change Organic Quinoa, & Red Rice', price: '$32.85', oldPrice: '$33.8', rating: '3.0'},
    { id: 6, image: Img6, title: 'Naturally Flavored Cinnamon  Roast Coffee', price: '$32.85', oldPrice: '$33.8', rating: '4.0' },
  ]},
  { category: 'Recently added', products: [
    { id: 7, image: Img7, title: 'Pepperidge Farm Farmhouse  Bread', price: '$32.85', oldPrice: '$33.8', rating:'3.0' },
    { id: 8, image: Img8, title: 'Organic Frozen Triple Berry Blend', price: '$32.85', oldPrice: '$33.8', rating:'4.0'},
    { id: 9, image: Img9, title: 'Oroweat Country Buttermilk Bread', price: '$32.85', oldPrice: '$33.8', rating: '4.0' },
  ]},
  { category: 'Top Rated', products: [
    { id: 10, image: Img10, title: 'Foster Farms Takeout Crispy Wings', price: '$32.85', oldPrice: '$33.8', rating: '3.0' },
    { id: 11, image: Img11, title: 'Angie’s Boomchickapop Sweet & Salty Corn', price: '$32.85', oldPrice: '$33.8', rating: '4.0' },
    { id: 12, image: Img12, title: 'All Natural Italian-Style Chicken Meatballs', price: '$32.85', oldPrice: '$33.8', rating:'3.0' },
  ]},
];

const ProductCard = ({ image, title, price, oldPrice, rating }) => (
  <div className="flex items-center  gap-4 bg-custom-white p-3 rounded-2xl shadow-sm ">
    <img src={image} alt={title} className=" cursor-pointer h-[115px] w-[115px] object-contain" />
    <div>
      <h3 className="text-sm cursor-pointer font-quicksand font-bold text-custom-blue">{title}</h3>
      
      {/* Rating: one star and numerical value */}
      <div className="mt-2 cursor-pointer text-yellow-400 flex items-center">
        <span>★</span> <span className="ml-12 font-lato w-[30px] h-[11px] text-sm text-custom-gray">({rating})</span>
      </div>

      {/* Price */}
      <div className="mt-2 cursor-pointer">
        <span className="text-base font-bold   font-quicksand text-custom-green">{price}</span>{' '}
        <span className="line-through font-quicksand font-bold text-custom-gray ml-1 text-sm">{oldPrice}</span>
      </div>
    </div>
  </div>
);

const TrendingProducts = () => {
  return (
    <div className="p-6 font-quicksand">
      <div className="grid grid-cols-1 mr-[12px] md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productSections.map((section) => (
          <div key={section.category}>
            <h2 className="text-lg font-bold ml-4 cursor-pointer text-custom-blue mb-4">{section.category}</h2>
            
            {/* Add the custom lines below the category title */}
            <h3 className='border-t ml-4 mt-2 h-[3px] w-[70px] bg-custom-light-green'></h3>
            <h3 className='border-t ml-4 h-[2px] opacity-100 text-custom-new-gray'></h3>
            
            <div className="mt-4">
              {section.products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

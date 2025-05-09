import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import banner from '../../assets/DealsPage/banner.png';
import img1 from '../../assets/DealsPage/img1.svg';
import img2 from '../../assets/DealsPage/img2.svg';
import img3 from '../../assets/DealsPage/img3.svg';
import img4 from '../../assets/DealsPage/img4.svg';
import img5 from '../../assets/DealsPage/img5.svg';
import img6 from '../../assets/DealsPage/img6.svg';
import Img1 from '../../assets/Popular-pro2/Img1.png';
import Img2 from '../../assets/Popular-pro2/Img2.png';
import Img3 from '../../assets/Popular-pro2/Img3.png';
import Img4 from '../../assets/Popular-pro2/Img4.png';
import Img5 from '../../assets/Popular-pro2/Img5.png';
import Img6 from '../../assets/Popular-pro2/Img6.png';
import Img7 from '../../assets/Popular-pro2/Img7.png';
import Img8 from '../../assets/Popular-pro2/Img8.png';
import Img9 from '../../assets/Popular-pro2/Img9.png'; 
import { Link } from 'react-router'; 
import Navbar from '../../Components/Navbar/Navbar';
import TopNav1 from '../../Components/TopNav1/TopNav1';
import TopNav2 from '../../Components/TopNav2/TopNav2';
import Footer from '../../Components/Footer/Footer';

// Product Data
const products = {
  gadgets: [
    { title: 'Smartphone', image: img1, price: '$299', description: 'Latest smartphone with high-end performance and camera quality.' },
    { title: 'Smartwatch', image: img2, price: '$199', description: 'Track your fitness and health with this stylish smartwatch.' },
    { title: 'Laptop', image: img3, price: '$999', description: 'A powerful laptop for work and play, featuring the latest tech.' },
    { title: 'Bluetooth Speaker', image: img4, price: '$59', description: 'Portable speaker with exceptional sound quality for any occasion.' },
    { title: 'Headphones', image: img5, price: '$129', description: 'Noise-canceling headphones with superior sound clarity.' },
    { title: 'Drone', image: img6, price: '$499', description: 'Capture stunning aerial views with this easy-to-fly drone.' },
    { title: 'Tablet', image: img2, price: '$350', description: 'Compact tablet with powerful features for work and entertainment.' },
    { title: 'Camera', image: img4, price: '$799', description: 'Professional-grade camera for capturing high-resolution images.' },
    { title: 'Power Bank', image: img3, price: '$25', description: 'Keep your devices charged on the go with this compact power bank.' },
    { title: 'Power Bank', image: img1, price: '$25', description: 'Reliable power bank for extended battery life during travels.' },
    { title: 'Power Bank', image: img6, price: '$25', description: 'Portable power bank for charging your devices anytime, anywhere.' },
    { title: 'Power Bank', image: img5, price: '$25', description: 'Compact power bank that fits in your bag for on-the-go charging.' },
  ],
  grocery: [
    { title: 'Organic Apples', image: Img1, price: '$3', description: 'Fresh, organic apples straight from the farm.' },
    { title: 'Bananas', image: Img2, price: '$2', description: 'Sweet and nutritious bananas for your daily snacks.' },
    { title: 'Milk', image: Img3, price: '$1.5', description: 'Fresh milk from local dairy farms for your morning routine.' },
    { title: 'Eggs', image: Img4, price: '$2.5', description: 'Farm-fresh eggs that are perfect for breakfast or cooking.' },
    { title: 'Rice', image: Img5, price: '$4', description: 'High-quality rice, ideal for your favorite dishes.' },
    { title: 'Bread', image: Img6, price: '$1.2', description: 'Freshly baked bread for sandwiches, toast, and more.' },
    { title: 'Carrots', image: Img7, price: '$1.8', description: 'Crisp and fresh carrots, great for snacking or cooking.' },
    { title: 'Cheese', image: Img8, price: '$3.2', description: 'Rich and creamy cheese to complement any meal.' },
    { title: 'Tomatoes', image: Img9, price: '$2.2', description: 'Juicy, ripe tomatoes perfect for salads and cooking.' },
    { title: 'Cheese', image: Img8, price: '$3.2', description: 'Smooth and flavorful cheese for your favorite dishes.' },
  ],
};

const Shop = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 🧩 Flexible product grid with category-based button styling
  const renderProductGrid = (category, gridClass, imageStyle = 'object-cover', categoryType = '') => {
    return (
      <div className={`grid ${gridClass} gap-8`}>
        {category.map((product, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden" 
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <img
              src={product.image}
              alt={product.title}
              className={`h-[230px] transition-all font-quicksand font-semibold hover:scale-105 w-full ${imageStyle} cursor-pointer`} 
            />
            <div className="p-4">
              <h3 className="text-xl font-quicksand font-semibold text-custom-blue">{product.title}</h3>
              <p className="text-lg font-bold font-quicksand text-custom-green">{product.price}</p>
              <p className="text-sm text-custom-new-gray mt-2">{product.description}</p>
              <div className="ml-2 flex space-x-6">
                <button className={`mt-4 ${categoryType === 'grocery' ? 'px-2 py-1 text-sm' : 'px-4 py-2'} bg-custom-yellow font-bold  text-white font-quicksa nd rounded hover:bg-yellow-600 transition`}>
                  Buy Now
                </button> 
                <button className={`mt-4 ${categoryType === 'grocery' ? 'px-2 py-1 text-sm' : 'px-4 py-2'} bg-custom-green font-bold font-quicksand text-white rounded hover:bg-green-600 transition`}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (  
    <> 
      <Navbar/>
      <TopNav2/>
      <TopNav1/>
      <div className="font-quicksand m-5 bg-custom-white-fillstroke text-custom-blue">  
  {/* Banner */}
  <div data-aos="fade-up" className="relative w-full ">
    <img src={banner} alt="Shop Banner" className="w-full rounded-lg" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   lg:-ml-[250px]  text-center text-custom-blue px-4 sm:px-0 w-full sm:w-auto">
      <h1 className="sm:text-2xl lg:text-5xl -ml-[100px] font-quicksand font-bold">Shop the Best Deals!</h1>
      <p className="mt-2 hidden sm:hidden lg:block -ml-[100px] text-base sm:text-lg lg:text-xl font-bold font-quicksand">
        Find discounts on top products right now
      </p>
    </div>
  </div>

  {/* Gadgets Section */}
  <section className="py-12 px-4 sm:px-6 md:px-20 bg-custom-white">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lato font-bold text-center mb-10 sm:mb-12 text-custom-blue">
      Gadgets
    </h2>
    {renderProductGrid(products.gadgets, 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4', 'object-cover', 'gadgets')}
  </section>

  {/* Grocery Section */}
  <section className="py-8 px-2 sm:py-10 sm:px-4 md:px-20 bg-custom-white">
  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-lato font-bold text-center mb-8 sm:mb-10 text-custom-blue">
    Grocery
  </h2>
  {renderProductGrid(
    products.grocery,
    'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5',
    'object-fill ',
    'grocery'
  )}
</section>


  {/* Call to Action */}
  <section className="py-12 sm:py-16 bg-custom-button-light-green rounded-lg text-center px-4">
    <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4 font-bold font-quicksand text-custom-blue">
      Ready to Explore More?
    </h2>
    <p className="text-sm sm:text-base text-custom-text-gray mb-4 sm:mb-6">
      Discover new arrivals and exclusive collections now.
    </p> 
    <Link to="/">
      <button className="bg-custom-green text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-green-600 transition">
        Start Shopping
      </button>
    </Link>
  </section>
</div>
<Footer/>

    </>
  );
};

export default Shop;

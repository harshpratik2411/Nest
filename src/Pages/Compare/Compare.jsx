import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/DealsPage/img1.svg';
import img4 from '../../assets/DealsPage/img4.svg';
import img7 from '../../assets/DealsPage/img7.svg'; 
import Navbar from '../../Components/Navbar/Navbar';
import TopNav1 from '../../Components/TopNav1/TopNav1';
import TopNav2 from '../../Components/TopNav2/TopNav2';
import Footer from '../../Components/Footer/Footer';

const products = [
  {
    id: 1,
    name: 'Headphone',
    image: img1,
    description: 'A feature-rich product that brings quality and performance.',
    price: '$19.99',
    brand: 'Brand A',
    availability: 'In Stock',
    rating: '⭐⭐⭐⭐☆',
  },
  {
    id: 2,
    name: 'Headphone',
    image: img4,
    description: 'Top-notch materials and refined design for modern use.',
    price: '$15.99',
    brand: 'Brand B',
    availability: 'In Stock',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    id: 3,
    name: 'Headphone',
    image: img7,
    description: 'Affordable and reliable, perfect for everyday needs.',
    price: '$24.99',
    brand: 'Brand C',
    availability: 'Out of Stock',
    rating: '⭐⭐⭐☆☆',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ComparePage = () => {
  return ( 
    <>
    <Navbar/> 
    <TopNav2/>
    <TopNav1/>
    <div className="bg-custom-white-fillstroke min-h-screen py-12 px-6 font-quicksand">
      {/* Heading with Framer Motion */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-lato font-bold text-center text-custom-blue mb-12"
      >
        Compare Products
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-custom-white-stroke p-6 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full transition-all transform  hover:scale-110 h-60 object-contain mb-6 rounded-lg cursor-pointer bg-custom-white-stroke"
            />
            <h2 className="text-2xl font-quicksand text-center font-bold text-custom-blue mb-2">
              {product.name}
            </h2>
            <p className="text-center font-lato font-medium text-custom-new-gray mb-4">
              {product.description}
            </p>
            <p className="text-center text-2xl font-bold text-custom-green mb-6">
              {product.price}
            </p>
            <div className="text-sm text-custom-text-lightgray space-y-2">
              <div className="flex justify-between">
                <span className="font-bold  font-quicksand text-custom-new-gray">Brand:</span>
                <span>{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-custom-new-gray">Availability:</span>
                <span
                  className={`font-medium ${
                    product.availability === 'In Stock'
                      ? 'text-custom-green'
                      : 'text-red-600'
                  }`}
                >
                  {product.availability}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-custom-new-gray">Rating:</span>
                <span>{product.rating}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-custom-green text-custom-white font-semibold py-2 px-3 rounded-lg mt-6 hover:bg-green-600 transition-colors duration-200"
            >
              Add to Compare
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>  
    <Footer/>
    </>
  );
};

export default ComparePage;

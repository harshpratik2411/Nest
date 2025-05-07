import { BrowserRouter, Routes, Route } from 'react-router' 
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import Homepage from './Pages/Homepage'
//import Deals from './Pages/Deals'
import About from './Pages/About/About'
//import Shop from './Pages/Shop'
//import Vendors from './Pages/Vendors'
//import MegaMenu from './Pages/MegaMenu'
import Blog from './Pages/Blog/BlogMain/BlogMain' 
import BlogDetailsMain from './Pages/Blog/BlogDetail/BlogDetailsMain/BlogDetailsMain';
//import Pages from './Pages/Pages'
import Contact from './Pages/Contact/Contact' 
import ProductDetailsMain from './Pages/ProductDetails/ProductDetailsMain/ProductDetailsMain';  
import ProductDetailsRow1 from './Pages/ProductDetails/ProductDetailsRow/ProductDetailsRow1';
import Cart from './Pages/Cart/Cart';
import { CartProvider } from './Context/CartContext';



function App() { 

useEffect(() => {
  AOS.init({
    duration: 1000,  // duration of animations
    once: true,      // whether animations should happen only once
  });



  
}, []); 

  return (  
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/deals" element={<Deals />} /> */}
          <Route path="/about" element={<About />} /> 
          <Route path="/product/:id" element={<ProductDetailsMain />} />
          <Route path="/product/:id" element={<ProductDetailsRow1 />} /> {/* Dynamic route */} 
          <Route path="/cart" element={<Cart/>} /> 

         {/* <Route path="/shop" element={<Shop />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/mega-menu" element={<MegaMenu />} />
        <Route path="/pages" element={<Pages />} />  */}
         <Route path="/blog" element={<Blog />} />  
         <Route path="/blog/:id" element={<BlogDetailsMain />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
        </CartProvider>
  )
}
  export default App
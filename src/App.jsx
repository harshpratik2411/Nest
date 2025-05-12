import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Homepage from './Pages/Homepage';
import Deals from './Pages/Deals/Deals';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
// import Vendors from './Pages/Vendors';
// import MegaMenu from './Pages/MegaMenu/MegaMenu';
import Blog from './Pages/Blog/BlogMain/BlogMain';
import BlogDetailsMain from './Pages/Blog/BlogDetail/BlogDetailsMain/BlogDetailsMain';
// import Pages from './Pages/Pages';
import Contact from './Pages/Contact/Contact';
import ProductDetailsMain from './Pages/ProductDetails/ProductDetailsMain/ProductDetailsMain';
import ProductDetailsRow1 from './Pages/ProductDetails/ProductDetailsRow/ProductDetailsRow1';
import Cart from './Pages/Cart/Cart';
import Compare from './Pages/Compare/Compare';
import Account from './Pages/Account/Account';
import { CartProvider } from './Context/CartContext';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <GoogleOAuthProvider clientId= "523842754384-2rtf6vp3jrsrdosn1s9q6uhp4ghlhsfv.apps.googleusercontent.com">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetailsMain />} />
            <Route path="/product/:id" element={<ProductDetailsRow1 />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/vendors" element={<Vendors />} /> */}
            {/* <Route path="/mega-menu" element={<MegaMenu />} /> */}
            {/* <Route path="/pages" element={<Pages />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetailsMain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

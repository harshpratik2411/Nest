import { BrowserRouter, Routes, Route } from 'react-router' 
import React from 'react'

import Homepage from './Pages/Homepage'
//import Deals from './Pages/Deals'
import About from './Pages/About/About'
//import Shop from './Pages/Shop'
//import Vendors from './Pages/Vendors'
//import MegaMenu from './Pages/MegaMenu'
//import Blog from './Pages/Blog'
//import Pages from './Pages/Pages'
//import Contact from './Pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/deals" element={<Deals />} /> */}
         <Route path="/about" element={<About />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/mega-menu" element={<MegaMenu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} /> */} 
      </Routes>
    </BrowserRouter>
  )
}
  export default App
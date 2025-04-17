import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import TopNav1 from './Components/TopNav1/TopNav1'
import TopNav2 from './Components/TopNav2/TopNav2'
import HeroMain from './Components/Hero/HeroMain/HeroMain'
import ShopByCat from './Components/ShopByCat/ShopByCat'
import TrendingProducts from './Components/TredingProduct/TrendingProducts'
 import Banner from './Components/Banner/BannerBottom'
 import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
    <Navbar/>  
   <TopNav2/>
   <TopNav1/>
      <HeroMain/> 
     <ShopByCat/>
     <TrendingProducts/>
      <Banner/>
      <Footer/> 
    </>
  )
}

export default App

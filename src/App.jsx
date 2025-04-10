import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Top1Main from './Components/Top1/TopMain'
import Top2Main from './Components/Top2/Top2Main' 
import HeroMain from './Components/Hero/HeroMain/HeroMain'
import ShopByCat from './Components/ShopByCat/ShopByCat'
import TrendingProducts from './Components/TredingProduct/TrendingProducts'
import Banner from './Components/Banner/BannerBottom'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
    <Navbar/> 
    <Top1Main/>
    <Top2Main/> 
    <HeroMain/>
    <ShopByCat/>
    <TrendingProducts/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default App

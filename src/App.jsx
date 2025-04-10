import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Top1Main from './Components/Top1/TopMain'
import Top2Main from './Components/Top2/Top2Main' 
import HeroMain from './Components/Hero/HeroMain/HeroMain'
import ShopByCat from './Components/ShopByCat/ShopByCat'


function App() {
  return (
    <>
    <Navbar/> 
    <Top1Main/>
    <Top2Main/> 
    <HeroMain/>
    <ShopByCat/>
    </>
  )
}

export default App

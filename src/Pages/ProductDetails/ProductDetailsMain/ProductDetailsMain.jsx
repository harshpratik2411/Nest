import React from 'react'
import ProductDetailsRowMain from '../ProductDetailsRowMain/ProductDetailsRowMain'
import ProductDetailsColMain from '../ProductDetailsColMain/ProductDetailsColMain'
import Navbar from '../../../Components/Navbar/Navbar'
import TopNav1 from '../../../Components/TopNav1/TopNav1'
import TopNav2 from '../../../Components/TopNav2/TopNav2'
import Footer from '../../../Components/Footer/Footer'
import BannerBottom from '../../../Components/Banner/BannerBottom'
const ProductDetailsMain = () => {
  return (  
    <>
   <div>
       <Navbar/> 
       <TopNav2/> 
       <TopNav1/>
      
      
       
   </div>
    <div className='flex'> 
        <ProductDetailsRowMain/>
        <ProductDetailsColMain/>  
    </div>
        <BannerBottom/>
        <Footer/>
    </>
  )
}

export default ProductDetailsMain
import React from 'react'
import BlogRowMain from '../BlogRowMain/BlogRowMain'
import BlogColMain from '../../Blog/BlogColMain/BlogColMain'
import BlogNav from '../BlogNav/BlogNav'
import Navbar from '../../../Components/Navbar/Navbar' 
import TopNav1 from '../../../Components/TopNav1/TopNav1'
import TopNav2 from '../../../Components/TopNav2/TopNav2'


const BlogMain = () => {
  return ( 
    <>  
    <Navbar/>
    <TopNav1/>
    <TopNav2/>
     <BlogNav/>

    <div className='flex'> 
<BlogRowMain/>
<BlogColMain/>
        
    </div>
    </>
  )
}

export default BlogMain
import React, { useState } from 'react'
// import Navbar from '../../Components/Navbar/Navbar'
import TopNav1 from '../../Components/TopNav1/TopNav1'
import TopNav2 from '../../Components/TopNav2/TopNav2' 
import banner from '../../assets/About/banner.png'
import image1 from '../../assets/About/img1.png'
import image2 from '../../assets/About/img2.png'
import image3 from '../../assets/About/img3.png'
import leftarrow from '../../assets/About/leftarrow.svg'
import rightarrow from '../../assets/About/rightarrow.svg'
import icon1 from '../../assets/About/icon1.png'
import icon2 from '../../assets/About/icon2.png'
import icon3 from '../../assets/About/icon3.png'
import icon4 from '../../assets/About/icon4.png'
import icon5 from '../../assets/About/icon5.png'
import icon6 from '../../assets/About/icon6.png' 
import Banner2 from '../../assets/About/Banner2.png' 
import banner3 from '../../assets/About/banner3.svg'
import ourteam1 from '../../assets/About/ourteamImg1.svg'
import ourteam2 from '../../assets/About/ourteamImg2.svg'
import facebook from '../../assets/About/facebook.svg'
import youtube from '../../assets/About/youtube.svg'
import instagram from '../../assets/About/instagram.svg'
import twitter from '../../assets/About/twitter.svg' 
import banner4 from '../../assets/About/banner4.svg'
import Footer from '../../Components/Footer/Footer'



const About = () => {
  const images = [image1, image2, image3]
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalImages = images.length

  const getVisibleImages = () => {
    return [
      images[currentIndex % totalImages],
      images[(currentIndex + 1) % totalImages],
      images[(currentIndex + 2) % totalImages]
    ]
  }

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
    } else {
      setCurrentIndex((prev) => (prev + 1) % totalImages)
    }
  }

  return ( 
    <> 
      <TopNav2/>
      <TopNav1/>
      <section className="p-10 flex-wrap ">
        <div className="flex flex-row items-start gap-10 ml-32">
          {/* Image Section */}
          <img 
            className=' w-[520px] rounded-md  h-[690px] object-cover' 
            src={banner}  
          />  

          {/* Text Section */}
          <div className="max-w-2xl">
            <h1  data-aos="zoom-in"  className='text-3xl hidden sm:hidden lg:block  font-bold cursor-pointer mt-6 font-quicksand mb-4'>Welcome to Nest</h1>
              
            <p data-aos="fade-up" className='mt-8 ml-1  hidden sm:hidden lg:block  cursor-pointer font-lato text-custom-new-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus a nisl condimentum vulputate. Sed at turpis vel risus fermentum convallis. Cras tristique sapien vitae justo laoreet, nec sollicitudin nisl tincidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, laborum!
              <br/><br/>
            </p>
            <p data-aos="fade-up" className='font-lato  hidden sm:hidden lg:block   ml-1  cursor-pointer text-custom-new-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus a nisl condimentum vulputate. Sed at turpis vel risus fermentum convallis. Cras tristique sapien vitae justo laoreet, nec sollicitudin nisl tincidunt.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, debitis, animi, ducimus alias rerum harum magni deleniti eaque distinctio provident mollitia ut deserunt obcaecati laborum quibusdam esse nisi quia perspiciatis earum sit fugit! Quia, voluptatum consequuntur. Dicta, fugiat! Dolores, rem!
              <br/><br/>
            </p> 

            {/* Image Slider Section */}
            <div className="relative -ml-[26px] hidden sm:hidden lg:block   mt-[56px]">
              <button 
                 
                onClick={() => handleScroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-custom-white-stroke rounded-full -ml-3"
              >
              
              <img className='p-1 ml-2' src={leftarrow}  />
              </button> 

              <div className="flex justify-center cursor-pointer items-center space-x-4 px-10">
                {getVisibleImages().map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`img-${index}`}
                    className="w-[200px] h-[250px] object-cover rounded-md"
                  />
                ))}
              </div>

              <button 
                onClick={() => handleScroll('right')}
                className="absolute right-0 ml-1 top-1/2  transform -translate-y-1/2 bg-custom-white-stroke  z-10 rounded-full -mr-3"
              >
              <img className='p-1 ml-2' src={rightarrow}  />
              </button>
            </div>
          </div>
        </div>
      </section> 
      <section className="px-10 py-16 space-x-32 mr-16 bg-custom-white font-lato">
  <h2 data-aos="zoom-in" className="text-center text-3xl ml-28 cursor-pointer font-quicksand font-bold text-custom-blue mb-10">
    What We Provide?
  </h2>

  <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
    {[
      { title: 'Best Prices & Offers', icon: icon1 },
      { title: 'Wide Assortment', icon: icon2 },
      { title: 'Free Delivery', icon: icon3 },
      { title: 'Easy Returns', icon: icon4 },
      { title: '100% Satisfaction', icon: icon5 },
      { title: 'Great Daily Deal', icon: icon6 },
    ].map((item, idx) => (
      <div key={idx} className="bg-custom-white  w-[380px] h-[300px] border  p-6 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <img src={item.icon} alt={item.title} className="w-[100px] transition-all transform hover:scale-110 cursor-pointer h-[100px]" />
        </div>
        <h3 className="text-lg font-semibold cursor-pointer text-custom-blue font-quicksand mb-2">{item.title}</h3>
        <p className="text-custom-text-lightgray text-sm mb-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
        </p>
        <a href="#" className="text-custom-green text-sm font-medium ">
          Read more
        </a> 
      </div>  
    ))}  
    </div>
     <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
    <img src={Banner2} alt="Shopping" className="rounded-md w-[700px] h-[538px] object-cover" />

     <div className="max-w-xl mt-8" >
      <h3  data-aos="zoom-in"  className="text-custom-gray -mt-[120px] font-quicksand font-bold text-sm mb-2">Our performance</h3>
      <h2   data-aos="zoom-in"  className="text-4xl font-quicksand mt-4 font-bold text-custom-blue mb-4">
        Your Partner for  e- <br />commerce grocery <br /> solution
      </h2>
      <p data-aos="fade-up" className="text-custom-text-gray font-lato mt-8 text-sm mb-4">
        Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iure. doloremque laudantium...
      </p>
      <p data-aos="fade-up" className="text-custom-text-gray font-lato text-sm">
        Pitaties et quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque velit non maiores ad minima sit reiciendis, tempora magnam hic dolorem! architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem...
      </p>
    </div> 
  </div>
   <div data-aos="fade-up" className="grid grid-cols-1  md:grid-cols-3 gap-8 text-center">
    {['Who we are', 'Our history', 'Our mission'].map((section, idx) => (
      <div key={idx}>
        <h3 className=" text-2xl -ml-3 font-bold text-custom-blue font-quicksand mb-2">{section}</h3>
        <p data-aos="fade-up" className="text-custom-text-lightgray text-center -ml-3 text-sm">
          Volutpat diam ut Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, officiis. venenatis tellus in metus. Nec dui nunc mattis enim ut tellus.
        </p>
      </div>

    ))}
    </div> 
</section> 
<section className="relative  mr-3 w-full h-[300px]">
  <div className="w-full h-full relative">
    <img
      className="ml-[150px] w-[1250px] h-[300px] object-cover"
      src={banner3}
      alt=""
    />

    {/* Overlay */}
    <div className="absolute top-0 left-[150px] w-[1250px] h-[300px] bg-custom-olivegreen opacity-50 z-10"></div>

    {/* Text on top of image and overlay */}
    <div className="absolute top-0 left-[150px] w-[1250px] h-[300px] flex items-center justify-center z-20">
      <div className="flex space-x-36 text-white text-xl font-semibold">
        <h1 className='text-5xl'>0+
        <p className='text-sm'>Glorious Years</p>
          </h1> 
        <h1 className='text-5xl'>0+
        <p className='text-sm'>Happy Clients</p>
          </h1> 
        <h1 className='text-5xl'>0+
        <p className='text-sm'>Project Completed</p>
          </h1> 
        <h1 className='text-5xl'>0+
        <p className='text-sm'>Team Advisor</p>
          </h1> 
        <h1 className='text-5xl'>0+
        <p className='text-sm'>Products Sale</p>
          </h1> 
      
      </div>
    </div>
  </div>
</section>   
<h1 className='justify-center item-center mt-4 font-quicksand font-bold text-2xl text-center'> Our Team</h1>
<section className="px-10 flex gap-[100px] py-20 font-lato"> 
  
  <div className="text-center ml-[180px] mb-16">
    <h3 className="text-custom-green -ml-[215px] text-sm font-semibold">Our Team</h3>
    <h2 className="text-4xl font-bold text-custom-blue font-quicksand mt-2">
      Meet Our Expert <br /> Team
    </h2>
    <p data-aos="fade-up" className="text-custom-text-lightgray ml-2 w-[300px] text-sm font-lato text-left mt-6 mx-auto">
      Proin ullamcorper pretium Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est tempora numquam tempora commodi ipsum eveniet, quo in porro!
      Donec neccele rccon sequata congue idsem. Maecenas malesuada faucibus finibus.
    </p>
    <p data-aos="fade-up" className="text-custom-text-lightgray w-[300px] text-sm font-lato mt-4 text-left mx-auto">
      Proin ullamcorper Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur. pretium orci. Donec neccele risque leo. Nam massa <br />
      dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
    </p>
    <button className="mt-6 bg-custom-green text-white -ml-[140px] px-6 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition">
      View All Members
    </button>
  </div>

  <div className="flex justify-center gap-10">
    {/* Member 1 */}
    <div className="bg-white rounded-lg cursor-pointer  overflow-visible w-[320px] relative ">
      <img src={ourteam1} alt="H. Merinda" className="h-[400px] cursor-pointer w-full object-cover" />

      <div className="absolute -mt-[60px] left-0 w-full px-6">
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <h3 className="text-lg font-bold text-custom-blue font-quicksand">H. Merinda</h3>
          <p className="text-custom-text-gray text-sm">CEO & Co-Founder</p>
          <div className="flex t cursor-pointer justify-center gap-3 mt-3 text-custom-green text-sm">
            <img  className='ransition-all transform hover:scale-125' src={facebook} />
            <img className='ransition-all transform hover:scale-125' src={twitter} />
            <img className='ransition-all transform hover:scale-125' src={instagram} />
            <img className='ransition-all transform hover:scale-125' src={youtube} />
          </div>
        </div>
      </div>
    </div>

    {/* Member 2 */}
    <div className="bg-white rounded-lg  cursor-pointer overflow-visible w-[320px] relative ">
      <img src={ourteam2} alt="Dilan Specter" className="h-[400px] w-full object-cover" />

      <div className="absolute -mt-[60px] left-0 w-full px-6">
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <h3 className="text-lg font-bold text-custom-blue font-quicksand">Dilan Specter</h3>
          <p className="text-custom-text-gray text-sm">Head Engineer</p>
          <div className="flex cursor-pointer justify-center gap-3 mt-3 text-custom-green text-sm">
            <img className='ransition-all transform hover:scale-125' src={facebook} />
            <img className='ransition-all transform hover:scale-125' src={twitter} />
            <img className='ransition-all transform hover:scale-125' src={instagram} />
            <img className='ransition-all transform hover:scale-125' src={youtube} />
          </div> 
        </div>
      </div>
    </div>
  </div> 
</section> 
<section className="relative mb-16  lg:w-[1490px] lg:h-[460px] sm:w-[790px] sm:h-[450px]  mt-4 rounded-lg py-16 px-8 flex flex-wrap justify-center items-center">
          <img src={banner4} alt="" className="absolute  rounded-lg inset-0 w-full  h-full sm:object-cover lg:object-cover" />
          <div className="relative max-w-4xl text-center  text-white">
            <h1 className="lg:text-5xl sm:text-2xl font-quicksand lg:-ml-[380px] ml-[10px] font-bold lg:w-[650px] lg:h-[130px] sm:w-[380px] sm:h-[80px] text-custom-blue py-4 mx-auto text-left">
             Stay home & Get your daily <br /> needs from our  shop
            </h1>
            <p className="lg:text-xl sm:text-base font-lato text-custom-new-gray lg:-ml-[760px] sm:-ml-[300px] lg:mr-0  mr-[112px] cursor-pointer  mb-6">Sign up for the daily newsletter</p>
            <div className="flex justify-center items-center lg:-ml-[390px] mr-3  mt-2 bg-custom-white rounded-full shadow-md lg:max-w-md sm:max-w-sm mx-auto overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4  py-3 outline-none  text-custom-blue"
                /> 
                <button className="bg-custom-green   lg:w-auto lg:ml-2  cursor-pointer text-custom-white px-6 py-3 rounded-full font-medium">
                Subscribe
              </button> 
             </div>
          </div>
        </section> 
    
 <Footer/>


    </>
  )
}

export default About
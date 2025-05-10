// Updated responsive Deals.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img1 from '../../assets/DealsPage/img1.svg';
import img2 from '../../assets/DealsPage/img2.svg';
import img3 from '../../assets/DealsPage/img3.svg';
import img4 from '../../assets/DealsPage/img4.svg';
import img5 from '../../assets/DealsPage/img5.svg';
import img6 from '../../assets/DealsPage/img6.svg';
import product1 from '../../assets/DealsPage/product1.svg';
import product2 from '../../assets/DealsPage/product2.svg';
import product3 from '../../assets/DealsPage/product3.svg';
import product4 from '../../assets/DealsPage/product4.svg';
import product5 from '../../assets/DealsPage/product5.svg';
import product6 from '../../assets/DealsPage/product6.svg';
import product7 from '../../assets/DealsPage/product7.svg';
import product8 from '../../assets/DealsPage/product8.svg';
import product9 from '../../assets/DealsPage/product9.svg';
import banner from '../../assets/DealsPage/banner.png';
import { Link } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import TopNav1 from '../../Components/TopNav1/TopNav1';
import TopNav2 from '../../Components/TopNav2/TopNav2';
import Footer from '../../Components/Footer/Footer';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 30, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      let { hours, minutes, seconds } = timeLeft;
      let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
      if (totalSeconds < 0) return clearInterval(interval);
      setTimeLeft({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="bg-custom-light-green text-custom-blue font-bold px-4 sm:px-2 py-4 font-quicksand -mt-5 mx-5 text-2xl sm:text-xl text-center rounded-lg mb-8" data-aos="flip-left">
      ⏰ Deal ends in: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
};

const Deals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty'];

  const deals = [
    { title: 'Buy 1 Get 1 Free', image: img1, color: 'custom-green', category: 'Fashion' },
    { title: '50% Off Electronics', image: img2, color: 'custom-orange', category: 'Electronics' },
    { title: 'Moblie phones', image: img3, color: 'custom-yellow', category: 'Home' },
    { title: 'Buy 1 Get 1 Free', image: img4, color: 'custom-green', category: 'Fashion' },
    { title: '50% Off Electronics', image: img6, color: 'custom-orange', category: 'Electronics' },
    { title: 'Moblie phones', image: img5, color: 'custom-yellow', category: 'Home' },
  ];

  const filteredDeals = activeCategory === 'All' ? deals : deals.filter(d => d.category === activeCategory);

  return (
    <>
      <Navbar />
      <TopNav2 />
      <TopNav1 />
      <div className="font-quicksand bg-custom-white relative">
        <div className="fixed bottom-6 right-6 bg-custom-pink text-white px-4 py-2 rounded-full shadow-lg z-50 animate-bounce text-sm sm:text-xs">
          💡 20% OFF Today Only!
        </div>

        <div className="bg-custom-pink m-5 text-custom-white font-bold text-center py-3 text-lg sm:text-base font-quicksand animate-pulse" data-aos="fade-down">
          🎁 Extra 10% OFF on your first order! Use code: <strong>FIRST10</strong>
        </div>

        <section className="bg-custom-light-green -mt-5 m-5 py-16 sm:py-10 px-8 sm:px-4 text-center">
          <h1 className="text-4xl sm:text-2xl md:text-6xl font-bold text-custom-blue mb-4" data-aos="fade-up">
            🎉 Mega Deals Week!
          </h1>
          <p className="text-custom-text-gray text-xl sm:text-base" data-aos="fade-up" data-aos-delay="200">
            Grab up to <span className="text-custom-pink font-bold">70% OFF</span> on all items!
          </p>
        </section>

        <Countdown />

        <section className="w-full py-6 px-2 sm:px-0">
          <div className="relative mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-md relative">
              <img src={banner} alt="Promotional Banner" className="w-full h-auto object-cover" />
              <div data-aos="flip-left" className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <h2 className="text-custom-blue text-3xl sm:text-xl md:text-6xl rounded-lg -mt-20 font-quicksand font-bold">
                  The Best Deals On <br /> The Gadgets
                </h2>
                <h4 className='mt-5 ml-10 text-blue-500 font-bold font-quicksand text-2xl sm:text-xl md:text-5xl'>
                  45% Off
                </h4>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 justify-center my-8 px-4" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm sm:text-xs font-bold hover:scale-110 font-quicksand rounded-full border ${
                activeCategory === cat ? 'bg-custom-green text-white' : 'bg-white border-custom-gray text-custom-text-gray'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <section className="py-12 px-4 sm:px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-custom-white-stroke">
          {filteredDeals.map((deal, idx) => (
            <div
              key={idx}
              className={`rounded-lg overflow-hidden shadow-lg border border-${deal.color}`}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img src={deal.image} alt={deal.title} className="w-full h-[300px] cursor-pointer object-contain transition-all transform hover:scale-125" />
              <div className="p-4 bg-custom-white">
                <h2 className={`text-lg font-bold text-${deal.color}`}>{deal.title}</h2>
                <p className="text-custom-text-lightgray font-quicksand font-bold mt-2">Limited time only!</p>
              </div>
            </div>
          ))}
        </section>

        {/* Keep the rest sections unchanged if they render well on mobile. Adjust with sm:text-sm and responsive widths/paddings if needed */}

        <section className="bg-custom-new-white-stroke py-12 px-6 text-center" data-aos="fade-up">
          <h3 className="text-4xl sm:text-2xl  font-quicksand mb-4 font-bold text-custom-blue">Stay Updated With Our Latest Deals!</h3>
          <div className="flex flex-col sm:flex-col md:flex-row justify-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-8 py-3 sm:px-4 sm:py-2 rounded-full border border-custom-new-gray focus:outline-none text-sm"
            />
            <button className="bg-custom-green text-white font-quicksand font-bold px-6 py-3 sm:px-4 sm:py-2 rounded-full hover:bg-green-600 transition">
              Subscribe
            </button>
          </div>
        </section>

        <section className="py-12 px-4  bg-custom-button-light-green text-center">
          <h3 className="text-2xl sm:text-xl md:text-4xl  font-bold text-custom-olivegreen mb-4" data-aos="fade-up">
            Don't Miss Out on These Epic Deals!
          </h3>
          <Link to="/">
            <button className="text-white bg-custom-green px-12 sm:px-6 py-3 font-quicksand font-bold rounded-3xl">
              Shop Now
            </button>
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Deals;
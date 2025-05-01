import React from 'react';
import Banner from '../../assets/Contact/banner.png';
import Img from '../../assets/Contact/Img1.svg';
import TopNav1 from '../../Components/TopNav1/TopNav1';
import TopNav2 from '../../Components/TopNav2/TopNav2';
import Footer from '../../Components/Footer/Footer';
import location1 from '../../assets/Contact/location.png';
import banner4 from '../../assets/About/banner4.svg';

const Contact = () => {
  return (
    <>
      <TopNav2 />
      <TopNav1 />

      <div className="font-quicksand text-custom-text-gray">
        {/* Section Header */}
        <section className="px-6 lg:px-24 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side: Text content */}
            <div>
              <p data-aos="fade-up" className="text-custom-green text-sm ml-1 font-quicksand font-bold">How can help you ?</p>
              <h2 data-aos="fade-up" className="text-3xl lg:text-4xl font-lato font-bold text-custom-blue mt-2 mb-4">
                Let us know how <br /> we can help you
              </h2>
              <p data-aos="fade-up" className="text-custom-text-gray mb-2 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p data-aos="fade-up" className="text-custom-text-gray max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Right side: Info grid */}
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 lg:mt-16">
              {[
                { title: '01. Visit Feedback', color: 'text-custom-blue' },
                { title: '02. Employer Services', color: 'text-custom-blue' },
                { title: '03. Billing Inquiries', color: 'text-custom-green' },
                { title: '04. General Inquiries', color: 'text-custom-blue' },
              ].map((item, index) => (
                <div key={index}>
                  <h4 className={`${item.color} font-quicksand font-bold`}>{item.title}</h4>
                  <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Image */}
        <div data-aos="fade-up" className="px-6 lg:px-24">
          <img src={Banner} alt="Map Banner" className="w-full object-cover rounded-lg" />
        </div>

        {/* Location Cards */}
        <section data-aos="zoomi-in" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-24 py-12 bg-custom-white font-quicksand">
          {['Office', 'Studio', 'Shop'].map((location, index) => (
            <div key={index}>
              <h4 className="text-custom-green font-bold text-lg mb-2">{location}</h4>
              <p className="text-sm text-custom-text-gray">
                205 North Michigan Avenue, Suite 810<br />
                Chicago, 60601, USA<br />
                Phone: (123) 456-7890<br />
                Email: contact@evara.com
              </p>
              <button className="mt-4 flex items-center gap-2 bg-custom-green text-white text-sm px-4 py-2 rounded hover:opacity-90">
                <img src={location1} alt="location icon" className="w-4 h-5" />
                View map
              </button>
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section className="px-6 lg:px-24 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p data-aos="fade-up" className="text-custom-green font-quicksand ml-1 text-sm font-bold">Contact form</p>
            <h2 data-aos="fade-up" className="text-3xl mt-2 font-quicksand font-bold text-custom-blue mb-4">Drop Us a Line</h2>
            <p data-aos="fade-up" className="text-sm text-custom-text-lightgray mb-6">Your email address will not be published. Required fields are marked *</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="p-3 border border-custom-white-stroke w-full" />
                <input type="email" placeholder="Your Email" className="p-3 border border-custom-white-stroke w-full" />
                <input type="text" placeholder="Your Phone" className="p-3 border border-custom-white-stroke w-full" />
                <input type="text" placeholder="Subject" className="p-3 border border-custom-white-stroke w-full" />
              </div>
              <textarea rows="6" placeholder="Message" className="w-full p-3 border border-custom-white-stroke"></textarea>
              <button className="bg-custom-blue text-white px-6 py-3 rounded">Send message</button>
            </form>
          </div>

          <div className="hidden lg:block">
            <img src={Img} alt="Woman on call" className="w-full h-auto rounded-lg object-cover" />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative mb-16 mt-4 rounded-lg px-6 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-center">
          <img src={banner4} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="relative text-white max-w-4xl text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-quicksand font-bold text-custom-blue mb-4">
              Stay home & Get your daily <br /> needs from our shop
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-lato text-custom-new-gray mb-6">
              Sign up for the daily newsletter
            </p>
            <div className="flex flex-col sm:flex-row items-center bg-custom-white rounded-full shadow-md max-w-full overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 outline-none text-custom-blue w-full sm:w-auto"
              />
              <button className="bg-custom-green text-white px-6 py-3 rounded-full font-medium mt-2 sm:mt-0 sm:ml-2">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

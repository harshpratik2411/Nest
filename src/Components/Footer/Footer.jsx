import React from 'react';
import { MdEmail } from 'react-icons/md';
import location  from '../../assets/Footer/location.svg'
import headphone  from '../../assets/Footer/headphone.svg'
import email  from '../../assets/Footer/email.svg'
import clock  from '../../assets/Footer/clock.svg'
import logo from '../../assets/Nest/NestLogo.svg';
import appstore from '../../assets/Footer/appstore.svg';
import playstore from '../../assets/Footer/playstore.svg';
import phone from '../../assets/Footer/phone.svg'
import facebook from '../../assets/Footer/fb.svg'
import instagram from '../../assets/Footer/ig.svg'
import youtube from '../../assets/Footer/yt.svg'
import pinintrest from '../../assets/Footer/pin.svg'
import twitter from '../../assets/Footer/x.svg'


const Footer = () => {
  return (
    <footer className="bg-custom-white-fillstroke  font-quicksand text-custom-text-gray text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        
        {/* 1. Logo & Contact Info */}
        <div className="space-y-3 font-lato">
          <img src={logo} alt="Nest Logo" className="w-[200px] cursor-pointer h-[63px]" />
          <p className="ml-2 cursor-pointer text-custom-new-gray text-sm">
            Awesome grocery store website template
          </p>
          <div className="flex  cursor-pointer items-start gap-2">
            <img src={location} className="text-custom-green w-[18px] h-[17px] font-semibold mt-1" />
            <span><strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
          </div>
          <div className="flex  cursor-pointer items-center gap-2">
            <img src={headphone} className="text-custom-green w-[18px] h-[17px]font-semibold" />
            <span><strong>Call Us:</strong> (+91) - 540-025-124553</span>
          </div>
          <div className="flex items-center cursor-pointer  gap-2">
            <img src={email} className="text-custom-green w-[18px] h-[17px]font-semibold" />
            <span><strong>Email:</strong> sale@Nest.com</span>
          </div>
          <div className="flex items-center cursor-pointer gap-2">
            <img src={clock} className="text-custom-green  w-[18px] h-[17px]font-semibold" />
            <span><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</span>
          </div>
        </div>
        {/* 2. Company */}
        <div>
          <h4 className="font-bold mt-5 cursor-pointer text-custom-blue ">Company</h4>
          <ul className="font-lato  cursor-pointer text-custom-blue mt-[47px] space-y-4">
            <li className='hover:text-custom-green'>About Us</li>
            <li className='hover:text-custom-green'>Delivery Information</li>
            <li className='hover:text-custom-green'>Privacy Policy</li>
            <li className='hover:text-custom-green'>Terms & Conditions</li>
            <li className='hover:text-custom-green'>Contact Us</li>
            <li className='hover:text-custom-green'>Support Center</li>
            <li className='hover:text-custom-green'>Careers</li>
          </ul>
        </div>

        {/* 3. Account */}
        <div>
          <h4 className="font-bold cursor-pointer mt-5 text-custom-blue ">Account</h4>
          <ul className="font-lato  cursor-pointer text-custom-blue mt-[47px] space-y-4">
            <li className='hover:text-custom-green'>Sign In</li>
            <li className='hover:text-custom-green'>View Cart</li>
            <li className='hover:text-custom-green'>My Wishlist</li>
            <li className='hover:text-custom-green'>Track My Order</li>
            <li className='hover:text-custom-green'>Help Ticket</li>
            <li className='hover:text-custom-green'>Shipping Details</li>
            <li className='hover:text-custom-green'>Compare products</li>
          </ul>
        </div>

        {/* 4. Corporate */}
        <div>
          <h4 className="font-bold cursor-pointer mt-5 text-custom-blue ">Corporate</h4>
          <ul className="font-lato cursor-pointer  text-custom-blue mt-[47px] space-y-4">
            <li className='hover:text-custom-green' >Become a Vendor</li>
            <li className='hover:text-custom-green' >Affiliate Program</li>
            <li className='hover:text-custom-green' >Farm Business</li>
            <li className='hover:text-custom-green' >Farm Careers</li>
            <li className='hover:text-custom-green' >Our Suppliers</li>
            <li className='hover:text-custom-green' >Accessibility</li>
            <li className='hover:text-custom-green' >Promotions</li>
          </ul>
        </div>

        {/* 5. Popular */}
        <div>
          <h4 className="font-bold cursor-pointer mt-5 text-custom-blue ">Popular</h4>
          <ul className="font-lato  cursor-pointer   text-custom-blue mt-[47px] space-y-4">
            <li className='hover:text-custom-green'>Milk & Flavoured Milk</li>
            <li className='hover:text-custom-green'>Butter and Margarine</li>
            <li className='hover:text-custom-green'>Eggs Substitutes</li>
            <li className='hover:text-custom-green'>Marmalades</li>
            <li className='hover:text-custom-green'>Sour Cream and Dips</li>
            <li className='hover:text-custom-green'>Tea & Kombucha</li>
            <li className='hover:text-custom-green'>Cheese</li>
          </ul>
        </div>

        {/* 6. Install App */}
        <div>
          <h4 className="font-bold cursor-pointer mt-5 text-custom-blue mb-3">Install App</h4>
          <p className=" mt-16 mb-4"></p>
          <div className="flex  gap-3">
            <img src={appstore} alt="App Store" className="w-[110px] h-[45px]" />
            <img src={playstore} alt="Google Play" className="w-[110px] h-[45px]" />
          </div>
          <p className="text-sm mt-4 hover:text-custom-green  cursor-pointer text-custom-blue">Secured Payment Gateways</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t font-lato border-custom-white-stroke mt-6 pt-6"> 
      <h3 className='border-t border-custom-light-green w-[1500px] h-[2px] opacity-100'></h3>

        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-center md:text-left gap-y-6 text-custom-text-lightgray text-sm">
          
          {/* Left */}
          <div> 
            <p>
              © 2022, <span className="text-custom-green font-semibold">Nest</span> - HTML Ecommerce Template. <br />
              All rights reserved
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="flex gap-10 text-custom-green">
            <div className="flex items-start gap-2">
              <img src={phone} className="mt-1" />
              <div className="flex flex-col">
                <span className="font-lato text-[24px] font-semibold leading-none">1900 - 6666</span>
                <span className="text-custom-new-gray text-xs">Working 8:00 - 22:00</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <img src={phone} className="mt-1" />
              <div className="flex flex-col">
                <span className="font-bold text-[24px] font-quicksand text-custom-green leading-none">1900 - 8888</span>
                <span className="text-custom-new-gray text-xs">24/7 Support Center</span>
              </div>
            </div>
          </div>

          {/* Social Icons */} 
          
          <div className='mt-4'>
          <div className="flex flex-col   items-center md:items-end">
            <p className="text-custom-blue  mr-[300px] "></p>  
            <div className="flex gap-3 mt-2"> 
              <p className=' font-quicksand cursor-pointer font-bold text-lg mt-2 text-custom-blue'>Follow us</p>
  <a href="https://facebook.com" target="_blank"  className="w-10 h-10 bg-custom-green rounded-full flex items-center justify-center">
    <img src={facebook} alt="Facebook" className="w-5 h-5" />
  </a>
  <a href="https://twitter.com" target="_blank"  className="w-10 h-10  bg-custom-green rounded-full flex items-center justify-center">
    <img src={twitter} alt="Twitter" className="w-5 h-5" />
  </a>
  <a href="https://instagram.com" target="_blank"  className="w-110h-10 bg-custom-green rounded-full flex items-center justify-center">
    <img src={instagram} alt="Instagram" className="w-9 h-9" />
  </a>
  <a href="https://pinterest.com" target="_blank"  className="w-10 h-10  bg-custom-green rounded-full flex items-center justify-center">
    <img src={pinintrest} alt="Pinterest" className="w-5 h-5" />
  </a>
  <a href="https://youtube.com" target="_blank"  className="w-10 h-10  bg-custom-green rounded-full flex items-center justify-center">
    <img src={youtube} alt="YouTube" className="w-9 h-9" />
  </a>
</div> 
</div>

            <p className="text-sm mt-2 ml-28 mb-2  cursor-pointer font-lato text-custom-new-gray">Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

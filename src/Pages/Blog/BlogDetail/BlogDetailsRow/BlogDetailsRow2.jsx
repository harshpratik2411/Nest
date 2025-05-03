import React from 'react';
import img1 from '../../../../assets/BlogDetails/img1.svg'
import author from  '../../../../assets/BlogDetails/author.svg'  
import  facebook from '../../../../assets/BlogDetails/facebook.svg'
import  instagram from '../../../../assets/BlogDetails/instagram.svg'
import  twitter from '../../../../assets/BlogDetails/twitter.svg'
import  pinterest from '../../../../assets/BlogDetails/pinterest.svg'

const BlogDetailsRow2 = () => {
  return (
    <div className="font-quicksand  text-custom-blue px-4 md:px-20 py-10" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-xl md:text-2xl ml-3 font-bold mb-4">Lorem ipsum dolor sit amet cons</h2>
      <p className="text-custom-blue ml-3 font-lato mb-6">
        Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch,
        rank it against the competition and enter it into the list you’ll find below.
      </p>

      <div className="w-full transition-all transform hover:scale-105 mb-6">
        <img src={img1} alt="blog main visual" data-aos="fade-up" data-aos-delay="100" className="w-full cursor-pointer rounded-xl" />
      </div>

      <p data-aos="fade-up" data-aos-delay="100" className="text-custom-blue font-lato mb-6">
        Tortor, lobortis semper varius, ac molestie tortor loremac amet euismod et diam quis aliquam consequat porttitor integer nisl. In faucibus nunc et nam rutrum dapibus nisl dignissim nec egestas ullamcorper eu augue, quam quis lacus pretium nec est amet nunc turpis massa nisl egestas felis ac malesuada metus molestie penatibus dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus.
      </p>

      <div className="bg-custom-new-white-bgstoke font-lato p-6 rounded-xl mb-6">
        <p className="text-custom-text-gray ">
          Integer eu faucibus <span className="text-custom-green">dolor[5]</span>. Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.
        </p>
      </div>

      <p className="text-custom-text-gray ml-1 font-lato mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero convallis feugiat. Nulla faucibus facilisis tincidunt a arcu, sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo mus mauris, eu vulputate. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.
      </p>

      <div className="flex items-center ml-1  cursor-pointer font-quicksand font-bold gap-4 mb-6">
  <button className="bg-custom-green  hover:bg-custom-light-green text-custom-white text-sm px-4 py-1 rounded-md">deer</button>
  <button className="bg-custom-green hover:bg-custom-light-green text-custom-white text-sm px-4 py-1 rounded-md">nature</button>
  <button className="bg-custom-green hover:bg-custom-light-green text-custom-white text-sm px-4 py-1 rounded-md">conserve</button>
  <p className="text-custom-text-lightgray font-lato font-semibold ml-[480px] text-sm ">Share this:</p>
  <div className="flex gap-3 text-custom-text-lightgray">
    <img src={facebook} alt="Facebook" className="w-7 h-7 mt-[2px]" />
    <img src={instagram} alt="Instagram" className="w-7 h-7" />
    <img src={twitter} alt="Twitter" className="w-7 h-7" />
    <img src={pinterest} alt="Pinterest" className="w-7 h-7" />
  </div>
</div>

    
      <div data-aos="fade-up" data-aos-delay="100" className="bg-custom-white-fillstroke p-6 rounded-xl flex items-start gap-4 mb-6">
        <img src={author} alt="author" className="w-14 h-14 rounded-full object-cover" />
        <div>
          <h3 className="font-bold text-sm">Barbara Cartland</h3>
          <p className="text-xs text-custom-new-gray mb-2">336 posts • Since 2012</p>
          <p className="text-sm text-custom-text-gray">
            Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-quicksand font-bold mb-4">Leave a Comment</h3>
      <form className="space-y-4 mb-10">
        <textarea className="w-full border border-custom-new-white p-3 rounded-xl h-32" placeholder="Comment"></textarea>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border border-custom-new-white p-3 rounded-xl" type="text" placeholder="Name" />
          <input className="border border-custom-new-white p-3 rounded-xl" type="email" placeholder="Email" />
        </div>
        <input className="border border-custom-new-white p-3 rounded-xl w-full" type="text" placeholder="Website" />
        <button className="bg-custom-green hover:bg-custom-light-green cursor-pointer text-custom-white font-lato font-bold py-2 px-6 rounded-xl">Post Comment</button>
      </form>

      <h3 className="text-xl ml-1 font-bold mb-4">Comments</h3>

      {['Sienna', 'Brenna', 'Gemma'].map((name, idx) => (
        <div key={idx} className="flex cursor-pointer items-start gap-4 mb-6 bg-custom-white-fillstroke p-4 rounded-xl">
          <img src={author} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs text-custom-new-gray mb-2">December 4, 2022 at 3:12 pm</p>
            <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-custom-text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate
              necessitatibus saepe modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetailsRow2;

import React, { useState, useRef } from 'react';
import Img1 from '../../assets/Featured-img/Img1.svg';
import Img2 from '../../assets/Featured-img/Img2.svg';
import Img3 from '../../assets/Featured-img/Img3.svg';
import Img4 from '../../assets/Featured-img/Img4.svg';
import Img5 from '../../assets/Featured-img/Img5.svg';
import Img6 from '../../assets/Featured-img/Img6.svg';
import Img7 from '../../assets/Featured-img/Img7.svg';
import Img8 from '../../assets/Featured-img/Img8.svg';
import Img9 from '../../assets/Featured-img/Img9.svg';
import Img10 from '../../assets/Featured-img/Img10.svg';
import LeftArrow from '../../assets/ShopByCat/LeftArrow.svg';
import RightArrow from '../../assets/ShopByCat/RightArrow.svg';
import Greaterthen from '../../assets/ShopByCat/Greaterthen.svg';

const categories = [
  { label: 'Snacks', icon: Img1 },
  { label: 'Organic Kiwi', icon: Img2 },
  { label: 'Peach', icon: Img3 },
  { label: ' Red Apple', icon: Img4 },
  { label: 'Packaged fast food', icon: Img5 },
  { label: 'Vegetables ', icon: Img6 },
  { label: 'Strawberry', icon: Img7 },
  { label: ' Black plum', icon: Img8 },
  { label: ' Custord Apple', icon: Img9 },
  { label: 'Coffee & Tea', icon: Img10 },
];

// Background colors for each card
const bgColors = [
  '#F2FCE4', '#FFFCEB', '#ECFFEC', '#FEEFEA',
  '#FFF3EB', '#FFF3FF', '#F2FCE4', '#FEEFEA',
  "#FFFCEB",  "#FEEFEA",
];

const FeaturedCat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (event.deltaY > 0) goToNext();
    else goToPrev();

    setTimeout(() => {
      isScrolling.current = false;
    }, 400);
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    containerRef.current.touchStartX = touchStartX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = containerRef.current.touchStartX;

    if (touchStartX - touchEndX > 50) goToNext();
    else if (touchEndX - touchStartX > 50) goToPrev();
  };

  return (
    <div className="w-full py-6 px-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="lg:text-3xl -ml-2 text-xl font-bold text-[32px] cursor-pointer font-quicksand text-custom-blue">
         Featured Categories
        </h2>
        <div className="hidden sm:flex font-quicksand font-semibold flex-row space-x-6 -ml-[500px] mt-3 text-custom-gray">
  <p className="ml-4 items-center text-custom-blue cursor-pointer opacity-100">Cake & Milk</p>
  <p className="items-center text-custom-blue cursor-pointer opacity-100">Coffee & Tea</p>
  <p className="text-custom-green items-center cursor-pointer opacity-100">Pet Food</p>
  <p className="text-custom-blue items-center cursor-pointer opacity-100">Vegetables</p>
</div>


        <button className="flex  items-center gap-4">
          <img
            className="w-[25px]  py-[8px] px-[7px] text-center rounded-xl bg-custom-white-stroke cursor-pointer"
            src={LeftArrow}
            onClick={goToPrev}
          />
          <img
            className="w-[25px] py-[8px] px-[7px] ml-3  text-center rounded-xl bg-custom-white-stroke mr-12 cursor-pointer"
            src={RightArrow}
            onClick={goToNext}
          />
        </button>
      </div>

      {/* Large screen layout */}
      <div
        className="relative -ml-2 hidden lg:block"
        ref={containerRef}
        onWheelCapture={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex overflow-x-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 250}px)` }}
          >
            {categories.concat(categories).map((cat, idx) => (
              <div
                key={idx}
                className="flex transition-transform duration-300 ease-in-out hover:scale-105 flex-col cursor-pointer items-center justify-center p-4 rounded-lg border-[1px] border-custom-white-stroke hover:shadow-md mx-2"
                style={{
                  width: '127px',
                  backgroundColor: bgColors[idx % bgColors.length],
                }}
              >
                <img src={cat.icon} alt={cat.label} className="w-[120px] h-[90px] mb-2" />
                <p className="text-[14px] w-[100px] font-quicksand font-bold text-custom-blue text-center">
                  {cat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="block lg:hidden overflow-x-auto">
        <div className="flex gap-4 min-w-max px-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col cursor-pointer items-center justify-center p-4 rounded-lg border-[1px] border-custom-white-stroke hover:shadow-md"
              style={{
                width: '140px',
                backgroundColor: bgColors[idx % bgColors.length],
              }}
            >
              <img src={cat.icon} alt={cat.label} className="w-[100px] h-[80px] mb-2" />
              <p className="text-[15px] font-quicksand font-bold text-custom-blue text-center">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCat;

import React from 'react';
import leaf from '../../assets/BestDailySale/leaf.png'
import Img1 from '../../assets/BestDailySale/Img1.svg'
import Img2 from '../../assets/BestDailySale/Img2.svg'
import Img3 from '../../assets/BestDailySale/Img3.svg'
import Img4 from '../../assets/BestDailySale/Img4.svg'

const products = [
  {
    id: 1,
    tag: 'Save 35%',
    tagColor: 'bg-custom-green text-custom-white',
    name: 'All Natural Italian-Style Chicken Meatballs',
    brand: 'Hodo Foods',
    price: '$238.85',
    oldPrice: '$245.8',
    sold: '90/120',
    image: Img1,
  },
  {
    id: 2,
    tag: 'Sale',
    tagColor: 'bg-custom-light-blue text-custom-white',
    name: "Angie’s Boomchickapop Sweet and womnies",
    brand: 'Hodo Foods',
    price: '$238.85',
    oldPrice: '$245.8',
    sold: '90/120',
    image: Img2,
  },
  {
    id: 3,
    tag: 'Best sale',
    tagColor: 'bg-custom-orange text-custom-white',
    name: 'Foster Farms Takeout Crispy Classic',
    brand: 'Hodo Foods',
    price: '$238.85',
    oldPrice: '$245.8',
    sold: '90/120',
    image: Img3,
  },
  {
    id: 4,
    tag: 'Save 15%',
    tagColor: 'bg-custom-pink text-custom-white',
    name: 'Blue Diamond Almonds Lightly Salted',
    brand: 'Hodo Foods',
    price: '$238.85',
    oldPrice: '$245.8',
    sold: '90/120',
    image: Img4,
  },
];

export default function DailyBestSale() {
  return (
    <section className="py-8 px-4 font-quicksand">
      <h2 className="text-custom-blue text-2xl font-bold mb-6">Daily Best Sells</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4"> 
      <div className="relative rounded-xl overflow-hidden">
  <img src={leaf} className="absolute inset-0 w-[400px] h-full object-cover" />

  <div className="relative z-10 flex flex-col justify-between p-6 h-full">
    <div>
      <p className="text-custom-blue text-xl font-bold leading-tight mb-4">
        Bring nature <br /> into your <br /> home
      </p>
      <button className="bg-custom-green text-white rounded-md text-sm px-4 py-2">
        Shop Now
      </button>
    </div>
  </div>
</div>
  
        {/* Product Cards */}
        {products.map((product, idx) => (
          <div key={product.id} className="relative bg-white border border-custom-white-stroke rounded-xl p-4">
            <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded ${product.tagColor}`}>{product.tag}</span>
            {idx === 0 && (
              <button className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border border-gray-300 bg-white">←</button>
            )}
            {idx === products.length - 1 && (
              <button className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border border-gray-300 bg-white">→</button>
            )}
            <img src={product.image} alt={product.name} className="mx-auto h-32 object-contain mb-4" />
            <div className="text-sm text-custom-new-gray mb-1">{product.brand}</div>
            <div className="font-semibold text-custom-blue mb-1 leading-tight">{product.name}</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-custom-green font-bold">{product.price}</span>
              <span className="text-custom-text-lightgray line-through text-xs">{product.oldPrice}</span>
            </div>
            <div className="text-custom-text-gray text-xs mb-2">Sold: {product.sold}</div>
            <button className="w-full bg-custom-button-light-green text-custom-green font-semibold py-2 rounded-md text-sm">
              + Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
} 

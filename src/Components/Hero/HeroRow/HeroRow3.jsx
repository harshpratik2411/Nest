import React from "react";
import Img1 from "../../../assets/Popular-pro2/Img1.png";
import Img2 from "../../../assets/Popular-pro2/Img2.png";
import Img3 from "../../../assets/Popular-pro2/Img3.png";
import Img4 from "../../../assets/Popular-pro2/Img4.png";
import Img5 from "../../../assets/Popular-pro2/Img5.png";
import Img6 from "../../../assets/Popular-pro2/Img6.png";
import Img7 from "../../../assets/Popular-pro2/Img7.png";
import Img8 from "../../../assets/Popular-pro2/Img8.png";
import Img9 from "../../../assets/Popular-pro2/Img9.png";
import Img10 from "../../../assets/Popular-pro2/Img10.png";
import cartIcon from "../../../assets/Popular-pro2/cart.svg";

const products = [
  {
    tag: "Hot",
    image: Img1,
    category: "Snack",
    title: "Seeds of Change Organic Quinoa",
    rating: "(4.0)",
    brand: "NestFood",
    price: 28.85,
    oldPrice: 32.8,
  },
  {
    tag: "Sale",
    image: Img2,
    category: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    rating: "(3.5)",
    brand: "Stouffer",
    price: 52.85,
    oldPrice: 55.8,
  },
  {
    tag: "New",
    image: Img3,
    category: "Snack",
    title: "Angie’s Boomchickapop Sweet & Salty",
    rating: "(4.0)",
    brand: "StarKist",
    price: 48.85,
    oldPrice: 52.8,
  },
  {
    tag: "",
    image: Img4,
    category: "Vegetables",
    title: "Foster Farms Takeout Crispy Classic",
    rating: "(4.0)",
    brand: "NestFood",
    price: 17.85,
    oldPrice: 19.8,
  },
  {
    tag: "-14%",
    image: Img5,
    category: "Pet Foods",
    title: "Blue Diamond Almonds Lightly",
    rating: "(4.0)",
    brand: "NestFood",
    price: 23.85,
    oldPrice: 25.8,
  },
  {
    tag: "",
    image: Img6,
    category: "Hodo Foods",
    title: "Chobani Complete Vanilla Greek",
    rating: "(4.0)",
    brand: "NestFood",
    price: 54.85,
    oldPrice: 55.8,
  },
  {
    tag: "",
    image: Img7,
    category: "Meats",
    title: "Canada Dry Ginger Ale – 2 L Bottle",
    rating: "(4.0)",
    brand: "NestFood",
    price: 32.85,
    oldPrice: 33.8,
  },
  {
    tag: "Sale",
    image: Img8,
    category: "Snack",
    title: "Encore Seafoods Stuffed Alaskan",
    rating: "(4.0)",
    brand: "NestFood",
    price: 35.85,
    oldPrice: 37.8,
  },
  {
    tag: "Hot",
    image: Img9,
    category: "Coffes",
    title: "Gorton’s Beer Battered Fish Fillets",
    rating: "(4.0)",
    brand: "Old El Paso",
    price: 23.85,
    oldPrice: 25.8,
  },
  {
    tag: "",
    image: Img10,
    category: "Cream",
    title: "Haagen-Dazs Caramel Cone Ice Cream",
    rating: "(2.0)",
    brand: "Tyson",
    price: 22.85,
    oldPrice: 24.8,
  },
];

const getTagStyle = (tag) => {
  switch (tag) {
    case "Hot":
      return "bg-custom-pink text-custom-white";
    case "Sale":
      return "bg-custom-light-blue text-custom-white";
    case "New":
      return "bg-custom-green text-custom-white";
    default:
      case "Hot":
      return "bg-custom-orange text-custom-white";  
     
  }
};

const HeroRow3 = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 lg:grid-cols-5 gap-[10px]   p-1 bg-custom-white">
      {products.map((product, index) => (
        <div
          key={index}
          className="border-[1.5px ] sm:w-full lg:w-full border-2  lg:h-[360px] rounded-2xl relative bg-custom-white pb-3"
        >
          {product.tag && (
  <span
    className={`absolute top-[6px] -ml-[8px]  -mt-[6px]  left-2 cursor-pointer px-3 py-[4px]  text-[10px] sm:text-xs font-semibold rounded-tl-xl rounded-br-xl ${getTagStyle(
      product.tag
    )}`}
  >
    {product.tag}
  </span>
)}

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[160px] cursor-pointer object-contain px-2"
          />
          <p className="text-[9px] sm:text-xs text-custom-text-lightgray font-lato mb-0.5 px-2">
            {product.category}
          </p>
          <h3 className="text-[11px] sm:text-base font-bold cursor-pointer text-custom-blue font-quicksand mb-0.5 px-2 leading-snug">
            {product.title}
          </h3>
          <p className="text-[10px] sm:text-sm text-custom-text-lightgray mb-0.5 px-2">
            <span className="text-yellow-400 font-lato">★</span> {product.rating}
          </p>
          <p className="text-[9px] sm:text-xs text-custom-gray mb-1 px-2">
            By <span className="text-custom-green">{product.brand}</span>
          </p>

          <div className="flex items-center justify-between mt-1 px-2">
            <div className="flex items-center space-x-2">
              <p className="text-xs sm:text-lg font-bold font-quicksand text-custom-green">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-[10px] sm:text-sm line-through text-custom-gray">
                ${product.oldPrice.toFixed(2)}
              </p>
            </div>
            <div className="bg-custom-button-light-green ml-1 cursor-pointer flex items-center rounded-sm px-2 py-1 sm:px-3 sm:py-1.5">
              <img
                src={cartIcon}
                alt="Add to Cart"
                className="h-[14px] cursor-pointer -ml-1 sm:h-[18px]"
              />
              <span className="text-custom-green cursor-pointer pl-1 text-xs sm:text-base">
                Add
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroRow3;
 
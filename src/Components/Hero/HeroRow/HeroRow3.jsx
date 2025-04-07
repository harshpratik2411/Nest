import React from "react";
import Img1 from "../../../assets/Popular-pro/Img1.png";
import Img2 from "../../../assets/Popular-pro/Img2.png";
import Img3 from "../../../assets/Popular-pro/Img3.png";
import Img4 from "../../../assets/Popular-pro/Img4.png";
import Img5 from "../../../assets/Popular-pro/Img5.png";
import Img6 from "../../../assets/Popular-pro/Img6.png";
import Img7 from "../../../assets/Popular-pro/Img7.png";
import Img8 from "../../../assets/Popular-pro/Img8.png";
import Img9 from "../../../assets/Popular-pro/Img9.png";
import Img10 from "../../../assets/Popular-pro/Img10.png";

import CartIcon from "../../../assets/Popular-pro/cart.svg";

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
    rating: " (4.0)",
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

const HeroRow3 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-5 gap-3 p-6 -ml-2 bg-custom-white">
      {products.map((product, index) => (
        <div
          key={index}
          className="border w-[240px] h-[400px]  rounded-2xl shadow-md p-4 relative bg-custom-white "
        >
          {product.tag && (
            <span className="absolute top-2 left-2 cursor-pointer -ml-7 px-2 py-1 text-xs font-semibold rounded-md text-white bg-custom-tag">
              {product.tag}
            </span>
          )}
          <img
            src={product.image}
            alt={product.title}
            className="w-[200px] cursor-pointer font-bold font-quicksand h-[180px] object-contain mx-auto mb-4"
          />
          <p className="text-xs opacity-100 text-custom-text-lightgray font-lato  mb-1">
            {product.category}
          </p>
          <h3 className="font-bold cursor-pointer font-quicksand text-md mb-1">
            {product.title}
          </h3>
          <p className="text-custom-text-lightgray mb-1">
            <span className="mr-20  font-lato">⭐️</span>
            {product.rating}
          </p>

          <p className="text-xs ml-1 cursor-pointer text-custom-gray  mb-1">
            By <span className="text-custom-green">{product.brand}</span>
          </p>
          <div className="flex items-center mt-2 space-x-2">
            <p className="text-lg -ml-1 cursor-pointer font-bold font-quicksand px-2 text-custom-green">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm line-through cursor-pointer text-custom-gray">
              ${product.oldPrice.toFixed(2)}
            </p>
            <div className=" bg-custom-button-light-green  cursor-pointer flex flex-row p-3 items-center rounded-sm w-[85px] h-[36px] justify-center">
              <img src={CartIcon} alt="Add to Cart" className="h-[20px]"/>
              <span className="text-custom-gree cursor-pointer pl-1">Add</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroRow3;

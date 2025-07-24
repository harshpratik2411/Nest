import React from 'react'
import { useNavigate } from "react-router";
// import { CartContext } from  '../../../Context/CartContext'
import {CartContext} from "../../Context/CartContext" 
import { useContext } from 'react';
// import cartIcon from "../../../assets/Popular-pro2/cart.svg";
import cartIcon from "../../assets/Popular-pro2/cart.svg";
const getTagStyle = (tag) => {
    switch (tag) {
      case "Hot":
        return "bg-custom-pink text-custom-white";
      case "Sale":
        return "bg-custom-light-blue text-custom-white";
      case "New":
        return "bg-custom-green text-custom-white";
      default:
        return "bg-custom-orange text-custom-white";
    }
  };

const getGridProductUI = (product,index) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext); // 👈 get addToCart
  
  return (
    <div 
              key={index} 
              onClick={() => navigate(`/product/${index}`)}
              className="border-[1.5px] sm:w-full lg:w-full  cursor-pointer lg:h-[360px] rounded-2xl hover:scale-105 relative bg-custom-white pb-3"
            >
              {product.tag && (
                <span
                  className={`absolute top-[6px]  -ml-[8px] -mt-[6px] left-2 cursor-pointer px-3 py-[4px] text-[10px] sm:text-xs font-semibold rounded-tl-xl rounded-br-xl ${getTagStyle(product.tag)}`}
                >
                  {product.tag}
                </span>
              )}
    
              <img
                src={product.image}
                alt={product.title}
                // onClick={() => navigate(`/product/${index}`)}
                className="w-full h-[160px]   cursor-pointer object-contain px-2"
              />
    
    <h3 className="text-[11px] sm:text-base font-bold cursor-pointer text-custom-blue font-quicksand mb-0.5 px-2 leading-snug">
                {product.title}
              </h3>
              <p className="text-[10px] sm:text-sm  text-custom-text-lightgray mb-0.5 px-2">
                <span className="text-yellow-400  font-lato">★</span> 
               <span className="ml-[70px]" >
    
                   {product.rating}
               </span>
                 
              </p>
              <p className="text-[9px] sm:text-xs mt-2 text-custom-gray mb-1 px-2">
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
                <div
                  className="bg-custom-button-light-green ml-1 cursor-pointer flex items-center rounded-sm px-2 py-1 sm:px-3 sm:py-1.5"
                  onClick={() => {
                    addToCart({ ...product, id: index }); // 👈 add product to cart
                    navigate("/cart"); // 👈 go to cart page
                  }}
                >
                  <img
                    src={cartIcon}
                    alt="Add to Cart"
                    className="h-[14px]  cursor-pointer -ml-1 sm:h-[18px]"
                  />
                  <span className="text-custom-green rounded-md cursor-pointer pl-1 text-xs sm:text-base">
                    Add
                  </span>
                </div>
              </div>
            </div>
  )
}

export default getGridProductUI 

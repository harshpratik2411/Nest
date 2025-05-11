import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { products } from '../../../Components/Hero/HeroRow/HeroRow3';
import Footer from "../../../Components/Footer/Footer";
import love from '../../../assets/productdetails/love.svg';
import arrow from '../../../assets/productdetails/arrow.svg';
import rating from '../../../assets/productdetails/rating.png';
import cartIcon from "../../../assets/Popular-pro2/cart.svg";
import { CartContext } from "../../../Context/CartContext"; // Ensure this is correct

const ProductDetailsRow1 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products[id];
  const [selectedSize, setSelectedSize] = useState("60g");
  const { addToCart } = useContext(CartContext);

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

  if (!product) {
    return <div className="p-4 text-red-500">Product not found.</div>;
  }

  const getGridProductUI = (product, index) => {
    return (
      <div
        key={index}
        className="border-[1.5px] sm:w-full lg:w-full lg:h-[360px] rounded-2xl relative bg-custom-white pb-3"
      >
        {product.tag && (
          <span
            className={`absolute top-[6px] -ml-[8px] -mt-[6px] left-2 cursor-pointer px-3 py-[4px] text-[10px] sm:text-xs font-semibold rounded-tl-xl rounded-br-xl ${getTagStyle(product.tag)}`}
          >
            {product.tag}
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          onClick={() => navigate(`/product/${index}`)}
          className="w-full h-[160px] cursor-pointer object-contain px-2"
        />

        <h3 className="text-[11px] sm:text-base font-bold cursor-pointer text-custom-blue font-quicksand mb-0.5 px-2 leading-snug">
          {product.title}
        </h3>
        <p className="text-[10px] sm:text-sm text-custom-text-lightgray mb-0.5 px-2">
          <span className="text-yellow-400 font-lato">★</span>
          <span className="ml-[70px]">{product.rating}</span>
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
              addToCart(product);
              navigate("/cart");
            }}
          >
            <img
              src={cartIcon}
              alt="Add to Cart"
              className="h-[14px] cursor-pointer -ml-1 sm:h-[18px]"
            />
            <span className="text-custom-green rounded-md cursor-pointer pl-1 text-xs sm:text-base">
              Add
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl border border-custom-white-stroke rounded:md  mx-auto px-6 py-10 font-quicksand">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto cursor-pointer rounded-lg border border-custom-white-stroke"
          />
          <div className="flex flex-wrap sm:justify-center md:justify-start ml-0 md:ml-[80px] gap-4 sm:gap-6 md:gap-8 mt-6">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="w-20 h-20 bg-custom-white-fillstroke rounded border cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 w-full">
          <div className="bg-custom-pink/20 cursor-pointer font-bold  text-custom-pink px-3 py-1 rounded text-xs inline-block mb-3">
            Sale Off
          </div>

          <h1 className="text-3xl font-quicksand mt-6 font-bold text-custom-blue mb-2">
            {product.title}
          </h1>

          <span className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <img src={rating} alt="rating" />
            <p className="text-md font-lato cursor-pointer text-custom-text-gray sm:mt-0 mt-2">(32 reviews)</p>
          </span>

          <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3 mb-4 mt-4">
            <p className="text-3xl sm:text-4xl font-quicksand font-bold text-custom-green">${product.price.toFixed(2)}</p>  
            <div>
            <span className="text-custom-yellow  text-sm">26% Off</span>
            <p className="text-lg line-through  text-custom-gray">${product.oldPrice.toFixed(2)}</p>
            </div>
          </div>

          <p className="text-custom-new-gray font-lato mt-6 text-sm mb-4">
            Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, expedita! sit amet consectetur adipisicing elit. Labore atque, voluptates minus laboriosam fugiat minima...
          </p>

          {/* Sizes */}
          <div className="mb-4 flex mt-3">
            <span className="font-md font-lato mt-4 text-custom-new-gray">Size / Weight:</span>
            <div className="flex ml-3  flex-wrap gap-2 text-custom-new-gray mt-3">
              {["50g", "60g", "80g", "100g", "150g"].map(size => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size
                      ? "bg-custom-green text-white"
                      : "border-custom-white-stroke"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex flex-col sm:flex-row items-start  sm:items-center mt-4 gap-3 mb-6">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-20 border border-custom-white-stroke px-2 py-1 rounded"
            />
            <button   onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
             className="bg-custom-green font-bold font-quicksand text-custom-white px-6 py-2 rounded hover:bg-green-600 transition">
              Add to cart
            </button>
            <div className="flex gap-2 sm:ml-4">
              <button className="border border-custom-white-stroke rounded px-2 py-2">
                <img className="w-[20px] h-[20px]" src={love} alt="wishlist" />
              </button>
              <button className="border border-custom-white-stroke rounded px-2 py-2">
                <img src={arrow} alt="share" />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-y-2 mt-[53px] text-xs text-custom-text-gray font-lato">
            <p>Type: <span className="text-custom-green ml-1">Organic</span></p>
            <p className="sm:-ml-[110px] ml-0">MFG: <span className="text-custom-green ml-1">Jun 4.2022</span></p>
            <p>LIFE: <span className="text-custom-green ml-1">70 days</span></p>
            <p className="sm:-ml-[110px] ml-0">Tags: <span className="text-custom-green ml-1">Snack, Organic, Brown</span></p>
            <p>SKU: <span className="text-custom-green ml-1">FWM15VKT</span></p>
            <p className="sm:-ml-[110px] ml-0">Stock: <span className="text-custom-green ml-1">8 Items In Stock</span></p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 sm:ml-[80px] lg:ml-4  border-custom-new-white-stroke">
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-10 sm:ml-8 ml-4 bg-custom-white font-quicksand font-bold border-custom-white-stroke pb-2 mb-4 text-custom-new-gray">
          <button className="border border-custom-white-stroke px-4 py-1 rounded-2xl text-custom-green">Description</button>
          <button className="border border-custom-white-stroke px-4 py-1 rounded-2xl">Additional info</button>
          <button className="border border-custom-white-stroke px-4 py-1 rounded-2xl">Vendor</button>
          <button className="border border-custom-white-stroke px-4 py-1 rounded-2xl">Reviews (3)</button>
        </div>

        <div className="text-custom-gray font-lato sm:ml-10 ml-4 text-sm leading-6 space-y-4">
          <p>Uninhibited carnally hired Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea ipsa corporis ipsum nulla dolorem illo iste. Ipsa esse ex sint saepe explicabo reiciendis vitae optio magnam fugiat voluptatibus itaque, culpa similique dignissimos fugit rerum repudiandae corporis non iure cupiditate natus? Possimus doloribus eos quia. Delectus aliquam deserunt ducimus alias sapiente neque nobis et eveniet sunt voluptatem atque, earum reiciendis, repellendus temporibus, unde illum blanditiis veritatis maxime ut culpa? Aut distinctio labore, adipisci id libero perferendis enim consequatur vitae illum expedita ut? Odit odio aperiam amet quia itaque. Dolorem deleniti error molestias quis odit mollitia quasi odio iure minima hic. sit amet...</p>
          <ul className="list-disc  ml-5">
            <li>Type Of Packing: <span className="ml-[70px]">Bottle</span></li>
            <li>Color: <span className="ml-[133px]">Green, Pink, Powder Blue, Purple</span></li>
            <li>Quantity Per Case: <span className="ml-[55px]">100ml</span></li>
            <li>Ethyl Alcohol: <span className="ml-[87px]">75%</span></li>
            <li>Piece In One: <span className="ml-[90px]">Carton</span></li>
          </ul>
        </div>
      
      {/* Packaging, Suggested Use, etc. */}
      <div className="mt-8 ml-10  space-y-4">
          <div>
            <h3 className="text-xl text-custom-blue  font-bold mb-1">Packaging & Delivery</h3> 
            <p className="text-sm font-lato mt-2 text-custom-gray">Less Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit nihil vel sapiente. Atque neque ipsum perspiciatis molestiae, impedit optio ea voluptates necessitatibus doloribus maiores, odio incidunt mollitia reprehenderit ratione quis, ipsam quia illo esse blanditiis. Ipsam tenetur fuga in soluta. Odit qui velit in quaerat sequi ducimus. Provident laborum nobis autem nesciunt ipsam minima labore quasi asperiores qui ex debitis mollitia totam rem, aut cupiditate accusamus error. Placeat asperiores laboriosam quia dolorem fugit porro voluptate hic nesciunt quasi non. lion goodness that euphemistically robin...</p>
          </div>
          <div>
            <h3 className="text-xl text-custom-blue mt-8 font-bold mb-1">Suggested Use</h3>
            <ul className="list-disc mt-2 text-sm text-custom-gray ml-5">
              <li>Refrigeration not necessary.</li>
              <li>Stir before serving</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-custom-blue mt-8 font-bold mb-1">Other Ingredients</h3>
            <p className="text-sm mt-2 font-lato text-custom-gray">
              Organic raw pecans, organic raw cashews. This butter Lorem, ipsum.
            </p>
            <p className="text-sm font-lato text-custom-gray">
              Organic raw pecans,Lorem ipsum dolor sit Lorem, ipsum dolor.
            </p>
            <p className="text-sm font-lato text-custom-gray">
              Organic Lorem ipsum dolor sit. This butter was produced using a LTG...
            </p>
          </div>
          <div>
            <h3 className="text-xl text-custom-blue mt-8 font-bold mb-1">Warnings</h3>
            <p className="text-sm mt-2 text-custom-gray">
              Oil separation occurs naturally. May contain pieces of shell.
            </p>
          </div>
        </div>
        </div>
     
    

      {/* Related Products */}
      <section>
        <h3 className="text-xl sm:ml-[58px] ml-4 text-custom-blue mt-8 font-quicksand font-bold mb-1">
          Related Products
        </h3>

        <div className="grid sm:ml-[50px] ml-4 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] p-1 bg-custom-white">
          {products.map((relatedProduct, index) => getGridProductUI(relatedProduct, index))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsRow1;

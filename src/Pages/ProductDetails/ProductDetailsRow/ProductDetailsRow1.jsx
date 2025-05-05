
import React, { useState } from "react";
import { useParams ,useNavigate} from "react-router";
import { products } from '../../../Components/Hero/HeroRow/HeroRow3';
import Footer from "../../../Components/Footer/Footer";
import love from '../../../assets/productdetails/love.svg'
import arrow from '../../../assets/productdetails/arrow.svg'
import rating from '../../../assets/productdetails/rating.png' 
import Img1 from '../../../assets/Popular-pro2/Img1.png'
import Img2 from "../../../assets/Popular-pro2/Img2.png";
import Img3 from "../../../assets/Popular-pro2/Img3.png";
import Img5 from "../../../assets/Popular-pro2/Img5.png";
import cartIcon from "../../../assets/Popular-pro2/cart.svg";

  const Relatedproducts = [
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
       tag: "-14%",
          image: Img5,
          category: "Pet Foods",
          title: "Blue Diamond Almonds Lightly",
          rating: "(4.0)",
          brand: "NestFood",
          price: 23.85,
          oldPrice: 25.8,
    },
  ] 
  export { Relatedproducts };

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


const ProductDetailsRow1 = () => { 
  const navigate = useNavigate(); 
  const { id } = useParams();
  const product = products[id];
  const [selectedSize, setSelectedSize] = useState("60g");

  if (!product) {
    return <div className="p-4 text-red-500">Product not found.</div>;
  }

  return (  
  
    
    <div className="max-w-6xl mx-auto px-6 py-10 font-quicksand">
  <div className="flex flex-col md:flex-row gap-10">
    {/* Left: Image */}
    <div className="md:w-1/2 w-full">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto cursor-pointer rounded-lg border border-custom-white-stroke"
      />
      {/* Responsive thumbnails */}
      <div className="flex flex-wrap sm:justify-center md:justify-start ml-0 md:ml-[80px] gap-4 sm:gap-6 md:gap-8 mt-6">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="w-20 h-20 bg-custom-white-fillstroke rounded border cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
 


        {/* Right: Info */}
        <div className="md:w-1/2 w-full">
  <div className="bg-custom-pink/20 cursor-pointer text-custom-pink px-3 py-1 rounded text-xs inline-block mb-3">
    Sale Off
  </div>

  <h1 className="text-2xl font-quicksand mt-6 font-bold text-custom-blue mb-2">
    {product.title}
  </h1>

  <span className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
    <img src={rating}  alt="rating" />
    <p className="text-sm cursor-pointer text-custom-text-gray sm:mt-0 mt-2">(32 reviews)</p>
  </span>

  <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3 mb-4 mt-4">
    <p className="text-3xl sm:text-4xl font-quicksand font-bold text-custom-green">${product.price.toFixed(2)}</p>
    <p className="text-lg line-through text-custom-gray">${product.oldPrice.toFixed(2)}</p>
    <span className="text-custom-yellow text-sm">26% Off</span>
  </div>

  <p className="text-custom-text-gray font-lato mt-6 text-sm mb-4">
    Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore atque, voluptates minus laboriosam fugiat minima possimus repudiandae similique blanditiis ut. consectetur adipisicing elit. Aliquam rem officia, corrupti...
  </p>

  {/* Size */}
  <div className="mb-4 mt-8">
    <span className="font-semibold font-lato text-custom-new-gray">Size / Weight:</span>
    <div className="flex flex-wrap gap-2 text-custom-new-gray mt-2">
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

  {/* Quantity and Add to Cart */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 gap-3 mb-6">
    <input
      type="number"
      defaultValue={1}
      min={1}
      className="w-20 border border-custom-white-stroke px-2 py-1 rounded"
    />
    <button className="bg-custom-green font-quicksand text-white px-6 py-2 rounded hover:bg-green-600 transition">
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


 
          {/* Tags and Stock */} 
          <div className="grid grid-cols-2 gap-y-2 mt-20  text-xs text-custom-text-gray font-lato">
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
      <div className="mt-12 sm:ml-[80px] lg:ml-4 border border-custom-new-white-stroke">
  {/* Tab Buttons */}
  <div className="flex flex-wrap gap-2 sm:gap-4 mt-10 sm:ml-8 ml-4 bg-custom-white font-quicksand font-bold border-custom-white-stroke pb-2 mb-4 text-custom-new-gray">
    <button className="border border-custom-white-stroke px-4 py-1 rounded-2xl text-custom-green">Description</button>
    <button className="border border-custom-white-stroke px-4 py-1 rounded-2xl">Additional info</button>
    <button className="border border-custom-white-stroke px-4 py-1 rounded-2xl">Vendor</button>
    <button className="border border-custom-white-stroke px-4 py-1 rounded-2xl">Reviews (3)</button>
  </div>

  {/* Description Content */}
  <div className="text-custom-new-gray  font-lato sm:ml-10 ml-4 text-sm leading-6 space-y-4">
    

    <div className="text-custom-new-gray  font-lato sm lg:ml-10 text-sm leading-6  space-y-4">
          <p>
            Uninhibited carnally hired Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus suscipit illo, nemo unde perspiciatis animi cupiditate libero sapiente, vero distinctio consectetur quae magnam aut. Esse aliquam nesciunt dolorem harum non blanditiis eveniet quod hic? Illum ad sed itaque suscipit enim! Illo ullam saepe veritatis nemo atque, deserunt illum quae voluptatibus. played in whimpered dear gorilla koala depending and much yikes...
          </p>
          <ul className="list-disc  ml-5">
            <li>Type Of  Packing: <span className="ml-[70px]">  Bottle</span> 
            </li>
            <li>Color: <span  className="ml-[133px]"> Green, Pink, Powder Blue, Purple</span> 

            </li>
            <li>Quantity Per Case: <span  className="ml-[55px]"> 100ml</span>

            </li>
            <li>Ethyl Alcohol: <span  className="ml-[87px]">  75%</span>  

            </li>
            <li>Piece In One: <span  className="ml-[90px]">  Carton</span>
            </li>
          </ul>
          <p>
            Laconic overheard Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad provident maxime, assumenda numquam nesciunt aperiam! Veritatis, tenetur. Similique quo fugit molestias qui necessitatibus. Quisquam dolorum fugiat omnis ea illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet quam ea deleniti, dolore culpa dolorum quasi dolorem itaque magni, illo officiis sit? Vel distinctio eos officia voluptatem, modi ut. dear woodchuck wow this outrageously taut beaver hey hello far...
          </p>
        </div> 
      

  {/* Additional Sections */}
  {/* Additional Sections */}
  <div className="mt-8 sm:ml-10 ml-4 space-y-4">
    {/* Packaging & Delivery */}
    <div>
      <h3 className="text-xl text-custom-blue font-quicksand font-bold mb-1">Packaging & Delivery</h3>
      <p className="text-sm mt-3 text-custom-new-gray">
        Less Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis laudantium laborum quasi praesentium, ipsum sit explicabo reiciendis qui vero architecto debitis doloribus quia minima quos expedita aperiam consectetur magni quas repellat sed quaerat atque ducimus optio! Voluptates architecto ipsam optio aliquam dignissimos, hic delectus fugiat? Doloribus rerum quam dignissimos suscipit reprehenderit enim quibusdam modi, voluptatum reiciendis adipisci, laborum eos accusamus possimus impedit iusto dolore nam. Porro corporis quibusdam fugit qui. Sunt totam, beatae minus dolore quia qui est ex quam neque a maiores obcaecati nesciunt reprehenderit ea ad sapiente! Corrupti repudiandae magnam veritatis sed ipsam aperiam, labore maiores natus? sit amet consectetur adipisicing elit...
      </p>
    </div>

    {/* Suggested Use */}
    <div>
      <h3 className="text-xl mt-8 text-custom-blue font-quicksand font-bold mb-1">Suggested Use</h3>
      <ul className="list-disc mt-4 font-lato text-sm text-custom-new-gray ml-5">
        <li className="mt-2">Refrigeration not necessary.</li>
        <li className="mt-2">Stir before serving</li>
      </ul>
    </div>

    {/* Other Ingredients */}
    <div>
      <h3 className="text-xl mt-8 text-custom-blue font-quicksand font-bold mb-1">Other Ingredients</h3>
      <p className="text-sm font-lato mt-4 text-custom-new-gray">
        Organic raw pecans, organic raw cashews. This butter was produced using a LTG...
      </p>
      <p className="text-sm font-lato mt-4 text-custom-new-gray">
        This raw pecans, organic raw cashews. lorme6 This butteced using a 
      </p>
      <p className="text-sm font-lato mt-4 text-custom-new-gray">
        And raw pecans, organic raw cashews.  Lorem ipsum dolor sit.Thiss produced using a 
      </p>
    </div>

    {/* Warnings */}
    <div>
      <h3 className="text-xl text-custom-blue mt-8 font-quicksand font-bold mb-1">Warnings</h3>
      <p className="text-sm font-lato mt-4 text-custom-new-gray">
        Oil separation occurs naturally. May contain pieces of shell.
      </p>
    </div>
  </div>
</div>

    </div>    
    <section>
  <h3 className="text-xl sm:ml-[120px] ml-4 text-custom-blue mt-8 font-quicksand font-bold mb-1">
    Related Products
  </h3>

  <div className="grid sm:ml-[110px] ml-4 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] p-1 bg-custom-white">
    {Relatedproducts.map((product, index) => (
      <div
        key={index}
        className="w-full border-2 lg:h-[360px] rounded-2xl relative bg-custom-white pb-3"
      >
        {product.tag && (
          <span
            className={`absolute top-[6px] left-2 -ml-[8px] -mt-[6px] cursor-pointer px-3 py-[4px] text-[10px] sm:text-xs font-semibold rounded-tl-xl rounded-br-xl ${getTagStyle(product.tag)}`}
          >
            {product.tag}
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          onClick={() => navigate(`/Product/${index}`)}
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
              className="h-[14px] sm:h-[18px] cursor-pointer -ml-1"
            />
            <span className="text-custom-green cursor-pointer pl-1 text-xs sm:text-base">
              Add
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
  </div>

   
    
  );
};

export default ProductDetailsRow1;

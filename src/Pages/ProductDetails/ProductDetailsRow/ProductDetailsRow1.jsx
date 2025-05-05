
import React, { useState } from "react";
import { useParams } from "react-router";
import { products } from '../../../Components/Hero/HeroRow/HeroRow3';
import Footer from "../../../Components/Footer/Footer";
import love from '../../../assets/productdetails/love.svg'
import arrow from '../../../assets/productdetails/arrow.svg'
import rating from '../../../assets/productdetails/rating.png'

const ProductDetailsRow1 = () => {
  const { id } = useParams();
  const product = products[id];
  const [selectedSize, setSelectedSize] = useState("60g");

  if (!product) {
    return <div className="p-4 text-red-500">Product not found.</div>;
  }

  return (  
    <> 
    
    

    <div className="max-w-6xl mx-auto px-6 py-10 font-quicksand">
      <div className="flex  c flex-col md:flex-row gap-10">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto cursor-pointer rounded-lg border border-custom-white-stroke"
          />
          <div className="flex ml-[80px] gap-8 mt-6">
            {/* Dummy thumbnails */}
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="w-20 cursor-pointer h-20 bg-custom-white-fillstroke rounded border"
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
          <span className="flex">
           <img className="" src={rating} />
          <p className="text-sm  cursor-pointer text-custom-text-gray mt-4 mb-1">(32 reviews)</p>
          </span>
            
          <div className="flex items-end gap-3 mb-4">
            <p className="text-4xl font-quicksand mt-8 font-bold text-custom-green">${product.price.toFixed(2)}</p>
            <p className="text-lg  line-through text-custom-gray">${product.oldPrice.toFixed(2)}</p>
            <span className="text-custom-yellow text-sm">26% Off</span>
          </div>
          <p className="text-custom-text-gray font-lato mt-8 text-sm mb-4">
            Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore atque, voluptates minus laboriosam fugiat minima possimus repudiandae similique blanditiis ut. consectetur adipisicing elit. Aliquam rem officia, corrupti...
          </p>

          {/* Size */}
          <div className="mb-4 mt-8">
            <span className="font-semibold  font-lato text-custom-new-gray">Size / Weight:</span>
            <div className="flex gap-2 text-custom-new-gray  mt-2">
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
          <div className="flex items-center mt-4 gap-3 mb-6">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-16 border border-custom-white-stroke px-2 py-1 rounded"
            />
            <button className="bg-custom-green font-quicksand text-white px-6 py-2 rounded hover:bg-green-600 transition"> 
              Add to cart 
            </button> 
            <div className="flex ml-4  space-x-4"> 
              <button className="border  border-custom-white-stroke rounded px-2 py-2 bo ">
              <img className=" w-[20px] h-[20px]" src={love}  />
              </button> 
              <button>
              <img className="border  border-custom-white-stroke rounded px-2 py-2 bo " src={arrow}  />
              </button>
            </div>
          </div>
 
          {/* Tags and Stock */} 
          <div className="grid grid-cols-2 gap-y-2 mt-10 text-xs text-custom-text-gray font-lato">
  <p>Type: <span className= "text-custom-green ml-1">Organic</span></p>
  <p className="-ml-[110px]">MFG:  <span className="text-custom-green ml-1"> Jun 4.2022</span>
   </p>

  <p>LIFE: <span className="text-custom-green ml-1 ">70 days</span> </p>
  <p className="-ml-[110px]">Tags: <span className="text-custom-green ml-1">Snack, Organic, Brown</span></p>
  <p>SKU: <span className="text-custom-green ml-1">FWM15VKT </span></p>
  <p className="-ml-[110px]">Stock: <span className="text-custom-green ml-1">8 Items In Stock</span></p>
</div>
         
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 ml-[80px] border border-custom-new-white-stroke">
        <div className="flex gap-4 mt-10 ml-8 bg-custom-white font-quicksand font-bold border-custom-white-stroke pb-2 mb-4 text-custom-new-gray ">
          <button className="border  border-custom-white-stroke px-4 py-1 rounded-2xl text-custom-green">Description</button>
          <button className="border  border-custom-white-stroke px-4 py-1 rounded-2xl ">Additional info</button>
          <button className="border  border-custom-white-stroke px-4 py-1 rounded-2xl ">Vendor</button>
          <button className="border  border-custom-white-stroke px-4 py-1 rounded-2xl ">Reviews (3)</button>
        </div>
        <div className="text-custom-new-gray font-lato ml-10 text-sm leading-6 space-y-4">
          <p>
            Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes...
          </p>
          <ul className="list-disc ml-5">
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
            Laconic overheard Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet quam ea deleniti, dolore culpa dolorum quasi dolorem itaque magni, illo officiis sit? Vel distinctio eos officia voluptatem, modi ut. dear woodchuck wow this outrageously taut beaver hey hello far...
          </p>
        </div>

        {/* Packaging, Suggested Use, etc. */}
        <div className="mt-8 ml-10 space-y-4">
          <div>
            <h3 className="text-xl text-custom-blue font-quicksand font-bold mb-1">Packaging & Delivery</h3>
            <p className="text-sm mt-3 text-custom-new-gray">Less Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic incidunt iusto sed quaerat eaque consectetur aut. Nam dicta nemo temporibus est quaerat incidunt. Itaque deserunt, eius, nemo voluptatem commodi aspernatur delectus officiis id sed optio nulla consequatur beatae aliquam illo. Modi vero animi, voluptatem distinctio aspernatur quibusdam voluptates dicta maiores omnis corrupti! Odio minus quam nobis, incidunt corrupti quos, praesentium eveniet quisquam veniam earum sequi! Blanditiis, at amet ipsam itaque necessitatibus error delectus iste eos, tempore expedita quidem dolorem libero doloremque reiciendis voluptates similique, et laudantium? Magni illum molestiae hic, inventore similique amet repellendus itaque ratione! Non iure iusto tempora accusamus voluptas sunt velit, amet nostrum vel consequuntur aspernatur facere inventore quibusdam neque, quaerat natus quas similique porro odio nihil! lion goodness that euphemistically robin...</p>
          </div>
          <div>
            <h3 className="text-xl mt-8 text-custom-blue font-quicksand font-bold mb-1">Suggested Use</h3>
            <ul className="list-disc mt-4 font-lato text-sm text-custom-new-gray ml-5">
              <li className="mt-2">Refrigeration not necessary.</li>
              <li className="mt-2">Stir before serving</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mt-8 text-custom-blue font-quicksand font-bold mb-1">Other Ingredients</h3>
            <p className="text-sm font-lato mt-4 text-custom-new-gray">
              Organic raw pecans, organic raw cashews. This butter was produced using a LTG...
            </p>
            <p className="text-sm font-lato mt-4 text-custom-new-gray">
              This raw pecans, organic raw cashews. lorme6
               This butteced using a 
            </p>
            <p className="text-sm font-lato mt-4 text-custom-new-gray">
             And raw pecans, organic raw cashews.  Lorem ipsum dolor sit.Thiss produced using a 
            </p>
          </div>
          <div>
            <h3 className="text-xl text-custom-blue mt-8 font-quicksand font-bold mb-1">Warnings</h3>
            <p className="text-sm font-lato mt-4 text-custom-new-gray">
              Oil separation occurs naturally. May contain pieces of shell.
            </p>
          </div>
        </div>
      </div>
    </div>  
    
    </>
  );
};

export default ProductDetailsRow1;

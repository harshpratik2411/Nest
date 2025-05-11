

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

import getGridProductUI from "../../ProductUI/GridProductUI";

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

export { products };



const HeroRow3 = () => {
 
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 lg:grid-cols-5 gap-[10px] p-1 bg-custom-white">
      {products.map((product, index) => (
        getGridProductUI(product,index)
      ))}
    </div>
  );
};

export default HeroRow3;

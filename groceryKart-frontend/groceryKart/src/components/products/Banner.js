import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";

import banner from "@/assets/images/product-banner.jpg";

const ProductBanner = () => {
  return (
    <section className="py-10">
        <div className="container mx-auto px-6">
           <div className="relative overflow-hidden text-white px-10 bg-linear-to-r from-primary/50 to-secondary/20 w-full h-61 rounded-2xl shadow-sm">
          <Image
           src={banner}
           alt="banner"
           height={900}
           weight={900}
           className="w-full absolute bottom-0 left-0 -z-1"
          />
          
            <div className="flex items-center justify-between h-full mx-auto max-w-6xl">
            <div className="flex flex-col justify-center items-start">    
            <span className="font-bold">Local & Trust</span>
           <h2 className=" text-5xl font-semibold mb-3">
            Fresh local produce & daily groceires.</h2>
            <button className="bg-white rounded-lg px-5 py-1 text-black">
            Shop Now
            </button>
          </div>
          </div>
            <div className="px-10 ">
                <FaShoppingBag className="text-9xl" />
            </div>

           </div>
        </div>
        </section>
  );
};

export default ProductBanner;
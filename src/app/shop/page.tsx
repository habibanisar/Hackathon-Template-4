import React from "react";
import HeaderTop from "../components/HeaderTop";
import Navbar from "../components/Navbar";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";
import Footer from "../components/Footer";
const productNames = [
  "Vel elit euismod",
  "Ultricies condimentum imperdiet",
  "Vitae suspendisse sed",
  "Sed at fermentum",
  "Fusce pellentesque at",
  "Vestibulum magna laoreet",
  "Sollicitudin amet orci",
  "Ultrices mauris sit",
  "Pellentesque condimentum ac",
  "Cras scelerisque velit",
  "Lectus vulputate faucibus",
  "Purus risus, ut",
];

const products = [
    {
      name: "Vel elit euismod",
      image: "/images/image 9 (1).png"
    },
    {
      name: "Ultricies condimentum imperdiet",
      image: "/images/image 1165.png"
    },
    {
      name: "Vitae suspendisse sed",
      image: "/images/image 1173 (1).png"
    },
    {
      name: "Sed at fermentum",
      image: "/images/10011 1 (1).png"
    },
    {
      name: "Fusce pellentesque at",
      image: "/images/unnamed 1 (1).png"
    },
    {
      name: "Vestibulum magna laoreet",
      image: "/images/1562173100-movado-connect-1562173094 2.png"
    },
    {
      name: "Sollicitudin amet orci",
      image: "/images/purepng 1 (1).png"
    },
    {
      name: "Ultrices mauris sit",
      image: "/images/image 1164.png"
    },
    {
      name: "Pellentesque condimentum ac",
      image: "/images/res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0 2.png"
    },
    {
      name: "Cras scelerisque velit",
      image: "/images/cam 2.png"
    },
    {
      name: "Lectus vulputate faucibus",
      image: "/images/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczczLXBhaS0xNTgta2FuYXRlLTAxLnBuZw 1 (1).png"
    },
    {
      name: "Purus risus, ut",
      image: "/images/10011 1 (1).png"
    }
  ];
  
const ProductCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="bg-white flex flex-col items-center p-4">
      {/* Product Image */}
      <div className="w-[270px] h-[270px] bg-gray-200 rounded-md overflow-hidden mb-4 flex justify-center items-center">
      <Image
          src={image} 
          alt={name}
          width={201} 
          height={201} 
          className="object-contain" 
        />
      </div>

      {/* Product Name */}
      <h4 className="text-navyblue text-lg font-semibold mb-2">{name}</h4>

      <div className="flex justify-center space-x-1 mb-2">
        <div className="w-3 h-3 bg-[#DE9034] rounded-full"></div>
        <div className="w-3 h-3 bg-[#EC42A2] rounded-full"></div>
        <div className="w-3 h-3 bg-[#8568FF] rounded-full"></div>
      </div>

      {/* Price */}
      <div className="flex space-x-3 text-sm">
        <span className="text-navyblue font-semibold">$26.00</span>
        <span className="text-pink line-through">$42.00</span>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <HeaderTop />
      <Navbar />

      {/* Page Header */}
      <div className="relative w-full h-[286px] mt-12 bg-lightPurple">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-0">
          <h3 className="text-navyblue text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            Shop Grid Default
          </h3>
          <h5 className="text-navyblue text-sm sm:text-base md:text-xl font-bold mb-4">
            Home. Pages.
            <span className="text-pink text-sm sm:text-base md:text-xl font-bold">
              {" "}
              Shop Grid Default
            </span>
          </h5>
        </div>
      </div>

      {/* Section Header Above Grid */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 mt-8 mb-4">
        <div>
          <h2 className="text-navyblue text-lg sm:text-2xl font-bold">
            Ecommerce Accessories & Fashion item
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            About {productNames.length} results (0.62 seconds)
          </p>
        </div>

        {/* Controls Section */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0 md:ml-[-20px]">
          {/* Per Page */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Per Page:</span>
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded w-16"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Sort By:</span>
            <select className="border border-gray-300 px-2 py-1 rounded w-32">
              <option>Best Match</option>
            </select>
          </div>

          {/* View Section */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">View:</span>
            <div className="flex space-x-1">
              <div className="w-5 h-5">
                <MdWindow />
              </div>
              <div className="w-5 h-5">
                <TfiMenuAlt />
              </div>
            </div>
            {/* Input Field */}
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded w-24"
            />
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:p-8">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} image={product.image} />
        ))}
      </div>

       {/* Image Below Login Card */}
       <div className="flex justify-center items-center mt-8 px-4">
      <Image
        src="/images/image 1174.png"
        alt="Promotional Banner"
        width={904}  
        height={678}  
        className="w-full max-w-[904px] h-auto object-cover"
      />
      </div>
      <Footer/>
    </div>
  );
};

export default Page;

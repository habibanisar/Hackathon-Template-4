import React from "react";
import { CiPen } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
const TrendingProducts = () => {
  const products = [
    {
      name: "Cantilever Chair",
      price: "$36.00",
      oldPrice: "$46.00",
      image: "/images/image 1171.png",
    },
    {
      name: "Cantilever Chair",
      price: "$36.00",
      oldPrice: "$46.00",
      image: "/images/image 1170.png",
    },
    {
      name: "Cantilever Chair",
      price: "$36.00",
      oldPrice: "$46.00",
      image: "/images/image 1173.png",
    },
    {
      name: "Cantilever Chair",
      price: "$36.00",
      oldPrice: "$46.00",
      image: "/images/image 1172.png",
    },
  ];

  const horizontalImages = [
    {
      name: "Horizontal Image 1",
      image: "/images/Group 154.png",
    },
    {
      name: "Horizontal Image 2",
      image: "/images/Group 155.png",
    },
  ];

  const verticalImages = [
    {
      name: "Vertical Image 1",
      price: "$25.00",
      image: "/images/image 30.png",
    },
    {
      name: "Vertical Image 2",
      price: "$28.00",
      image: "/images/image 19.png",
    },
    {
      name: "Vertical Image 3",
      price: "$30.00",
      image: "/images/image 28.png",
    },
  ];

  const categories = [
    {
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/images/image 1171.png", 
    },
    {
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/images/image 1168.png", 
    },
    {
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/images/image 23.png", 
    },
    {
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/images/image 1.png", 
    },
  ];

  return (
    <section className="bg-purple-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-navyblue mb-12">
          Trending Products
        </h2>

        {/* Top Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
             <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
               <Image
                  src={product.image} 
                  alt={product.name} 
                  className="object-contain"
                  width={160} 
                  height={160} 
                />
             </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-navyblue">{product.name}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-navyblue font-semibold">{product.price}</p>
                  <p className="text-gray-400 line-through">{product.oldPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* New Layout */}
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Left: Horizontal Images */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {horizontalImages.map((item, index) => (
              <div
                key={index}
                className="relative border rounded-lg p-4 bg-pink-50 shadow hover:shadow-md"
              >
                <p className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
                  20% OFF
                </p>
                <Image
                 src={item.image}
                 alt={item.name}
                 className="w-full h-40 object-cover rounded-lg"
                 width={160}
                 height={160}
               />
              </div>
            ))}
          </div>

          {/* Right: Vertical Small Images */}
          <div className="flex-1 flex flex-col gap-4">
            {verticalImages.map((item, index) => (
              <div
                key={index}
                className="flex items-center border rounded-lg bg-pink-50 p-4 shadow hover:shadow-md"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center overflow-hidden rounded-full mr-4">
                <Image
                 src={item.image}
                 alt={item.name}
                 className="w-12 h-12 object-contain"
                 width={48} 
                 height={48}
                />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navyblue">{item.name}</h3>
                  <p className="text-navyblue font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Discount Items Section */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-navyblue mt-10">Discount Items</h2>
          <div className="flex justify-center space-x-6 mt-4 text-navyblue font-semibold ">
            <p className="text-pink underline hover:text-sky-500">Wood Chair</p>
            <p className="hover:text-sky-500">Plastic Chair</p>
            <p className="hover:text-sky-500">Sofa Chair</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Left Side: Text Content */}
          <div className="flex-3 ml-10">
            <h3 className="text-4xl font-bold text-navyblue">
              20% Dicount On All Products
            </h3>
            <h4 className="text-xl text-pink mt-2">Eames Sofa Compact</h4>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="mt-4 space-y-2">
              {["Material expose like metals", "Simple neutral colours.", "Clear lines and geomatric figures", "Material expose like metals"].map(
                (item, index) => (
                  <li key={index} className="flex items-center text-gray-500">
                    <span className="w-4 h-4 text-[#7569B2] flex items-center justify-center mr-2">
                      ✓
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
            <button className="mt-6 px-6 py-2 bg-pink text-white hover:bg-indigo-500">
              Shop Now
            </button>
          </div>

          {/* Right Side: Image Content */}
          <div className="relative w-[699px] h-[597px]">
          <div className="absolute inset-0 bg-pink-100 rounded-full w-[500px] h-[500px] -top-12 -left-10"></div>
             <Image
               src="/images/tortuga-01-b 1.png" 
               alt="Chair" 
               className="relative z-10 w-full h-full object-contain"
               width={699} 
               height={597} 
             />
          </div>
        </div>

        {/* Top Categories Section */}
        <div className="my-16">
          <h2 className="text-4xl font-bold text-center text-navyblue mb-12">
            Top Categories
          </h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Circle Container */}
                <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  {/* Background Circle Outline on Hover */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-purple-500 transition-all duration-300"></div>

                  {/* Category Image */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105"
                    width={96}
                    height={96}
                  />

                  {/* View Button on Hover */}
                  <button className="absolute inset-0 flex items-center justify-center  bg-opacity-40 text-black bg-green-400 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </button>
                </div>

                {/* Category Name */}
                <h3 className="mt-4 text-md font-bold text-navyblue">{category.name}</h3>

                {/* Category Price */}
                <p className="text-navyblue font-medium">{category.price}</p>
              </div>
            ))}       
          </div>
        </div>
          <div className="flex justify-center space-x-3 mt-4">
             <div className="w-2 h-2 rounded-full bg-pink"></div>
             <div className="w-2 h-2 rounded-full bg-pink"></div>
             <div className="w-2 h-2 rounded-full bg-pink"></div>
            </div> 
      </div>
       {/* Image Section with Heading and Button */}
      <div className="relative w-full h-[462px] mt-12">
      <Image
        src="/images/Rectangle 102.png"
        alt="Get Latest Update"
        className="w-full h-full object-cover"
        width={1920} 
        height={1080}
       />
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h3 className="text-navyblue text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      Get Latest Update By Subscribe
    </h3>
    <h3 className="text-navyblue text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      Our Newsletter
    </h3>
    <button className="px-6 py-2 bg-pink text-white hover:bg-indigo-500">
      Shop Now
    </button>
  </div>
</div>


{/* Latest Blog Section */}
<div className="text-center mt-16">
  <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-navyblue mb-6">
    Latest Blog
  </h2>
</div>

{/* Blog Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { title: "Top essential Trends in 2021", image: "/images/Frame 3 (1).png" },
    { title: "Top essential Trends in 2021", image: "/images/Frame 3.png" },
    { title: "Top essential Trends in 2021", image: "/images/Frame 4.png" }
  ].map((blog, index) => (
    <div
      key={index}
      className="relative w-full sm:w-[370px] h-[493px] border rounded-lg shadow-lg overflow-hidden bg-bgColor transition-transform duration-300 ease-in-out hover:scale-105"
    >
     <Image
       src={blog.image} 
       alt={blog.title}
       className="w-full h-[255px] object-cover"
       width={1920} 
       height={255}
      />

      {/* Blog Content */}
      <div className="p-4">
        <div className="flex items-center space-x-2 text-gray-500">
          <CiPen className="text-pink" />
          <span className="font-medium">Saber Ali</span>
          <FaRegCalendarAlt className="text-yellow-400" />
          <span className="font-medium">21 August 2020</span>
        </div>

        {/* Blog Title */}
        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-navyblue mt-4">{blog.title}</h3>

        {/* Blog Description */}
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          purus venenatis.
        </p>

        {/* Read More Button */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-pink underline hover:text-sky-500">Read More</p>
        </div>
      </div>
    </div>
  ))}
</div>
</section>
  );
};

export default TrendingProducts;

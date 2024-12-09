import React from "react";
import Image from "next/image";
const Card = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/images/image 1168.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/images/image 1.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/images/image 1169.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/images/image 3.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-navyblue mb-12">
          Featured Products
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
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
              {/* Product Details */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-pink">{product.name}</h3>
                <div className="flex justify-center gap-2 mt-2 mb-3">
                  <div className="h-1 w-4 bg-emerald-400 rounded"></div>
                  <div className="h-1 w-4 bg-pink rounded"></div>
                  <div className="h-1 w-4 bg-blue rounded"></div>
                </div>
                <p className="text-md font-semibold text-navyblue">
                  {product.code}
                </p>
                <p className="text-lg font-bold text-navyblue mt-2">
                  {product.price}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-offNavyBlue text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-6 bg-white text-pink font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Lines */}
        <div className="flex justify-center gap-2 mt-16">
          <div className="h-1 w-6 bg-pink rounded"></div>
          <div className="h-1 w-4 bg-rose-300 rounded"></div>
          <div className="h-1 w-4 bg-rose-300 rounded"></div>
          <div className="h-1 w-4 bg-rose-300 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default Card;

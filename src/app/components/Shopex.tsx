
import React from "react";
import Image from "next/image";
const Shopex = () => {
  const products = [
    {
      name: "24/7 Support",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti quam debitis.",
      image: "/images/orange-delivery-van-png-icon-removebg-preview.png", 
    },
    {
      name: "24/7 Support",
      image: "/images/png-clipart-removebg-preview.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti quam debitis.",
    },
    {
      name: "24/7 Support",
      image: "/images/4b09d6d734108561198bb4e6bfc0941f_t-removebg-preview.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti quam debitis",
    },
    {
      name: "24/7 Support",
      image: "/images/24-hours-customer-removebg-preview.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti quam debitis",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-auto w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-navyblue mb-10">
          What Shopex Offer!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border p-4 bg-white shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 w-full max-w-[270px] h-[320px] mx-auto"
            >
             {/* Image */}
              <div className="w-full h-32 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name} 
                  className="object-contain"
                  width={128}
                  height={128} 
                />
              </div>
              {/* Text */}
              <div className="mt-2 text-center">
                <h3 className="text-lg font-bold text-navyblue">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {product.discription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shopex;

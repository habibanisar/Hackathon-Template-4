import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function UniqueFeature() {
  return (
    <div className="bg-lightSky w-full h-[579px] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10">
      {/* Left Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
          src="/images/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png"
          alt="Image"
          width={400}
          height={289}
          className="object-contain"
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center pl-4 lg:pl-8">
        {/* Headings */}
        <div className="mb-4">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-navyblue mb-2">
            Unique Features Of Latest &
          </h1>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-navyblue">
            Trending products
          </h2>
        </div>

        {/* Points (4 lines) */}
        <ul className="list-disc pl-5 space-y-2 mb-5">
          <li className="text-base lg:text-lg text-gray-400">All frames constructed with hardwood solids and laminates</li>
          <li className="text-base lg:text-lg text-gray-400">Reinforced with double wood dowels, glue, screw-nails corner</li>
          <li className="text-base lg:text-lg text-gray-400">Arms, backs and seats are structurally reinforced</li>
        </ul>

        {/* Add to Cart Button with small lines */}
        <div className="flex items-center">
          <Button className="bg-pink text-white text-md w-36 h-12 mr-4 hover:bg-violet-600">
            Add to Cart
          </Button>
          <p className='text-navyblue font-semibold text-md'>B&B Italian Sofa</p>
        </div>
      </div>
    </div>
  );
}

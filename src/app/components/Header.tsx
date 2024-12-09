import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { BsDiamondFill, BsDiamond } from "react-icons/bs";

export default function Header() {
  return (
    <div className="bg-lightPurple w-full h-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-8">
      {/* Left Image Section */}
      <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
        <Image
          src="/images/image-32.png"
          alt="lamp"
          width={387}
          height={387}
          className="object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:w-1/2 px-4">
        {/* Small Line of Text */}
        <p className="text-sm text-pink font-semibold">Best Furniture For Your Castle...</p>
        {/* Bold Lines of Text */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-black my-2">
          New Furniture Collection
        </h1>
        <h1 className="text-3xl md:text-5xl font-extrabold text-black my-2">
          Trends In 2020
        </h1>
        {/* Small Paragraph */}
        <p className="text-base md:text-lg text-gray-500 leading-6 mt-3 max-w-lg">
          Experience unmatched quality and design with our exclusive furniture collections.
        </p>
        {/* Button */}
        <Button className="bg-pink text-white text-md mt-5 w-36 h-12 hover:bg-violet-600">
          Shop Now
        </Button>
        {/* Diamonds */}
        <div className="flex justify-center lg:justify-start items-center gap-2 mt-8">
          <BsDiamondFill className="text-pink text-xs" />
          <BsDiamond className="text-pink text-xs" />
          <BsDiamond className="text-pink text-xs" />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/images/sofa-promotional-header.png"
          alt="Sofa Promotional Header"
          width={400}
          height={289}
          className="object-contain"
        />
      </div>
    </div>
  );
}


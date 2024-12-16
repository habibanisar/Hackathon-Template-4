import React from "react";
import HeaderTop from "../components/HeaderTop";
import Navbar from "../components/Navbar";
import { FaHeart } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <HeaderTop />
      <Navbar />

      <div className="relative w-full h-[286px] mt-12 bg-lightPurple">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-0">
          <h3 className="text-navyblue text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            Product Details
          </h3>
          <h5 className="text-navyblue text-sm sm:text-base md:text-xl font-bold mb-4">
            Home. Pages.
            <span className="text-pink text-sm sm:text-base md:text-xl font-bold mb-4">
              {" "}
              Product Details
            </span>
          </h5>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row gap-8 px-8 py-12">
        {/* Left Column - Vertical Images */}
        <div className="flex flex-col gap-4 w-[151px]">
          <Image
            src="/images/Rectangle 134.png"
            alt="Vertical Image 1"
            width={151}
            height={155}
            className="object-cover"
          />

          <Image
            src="/images/Rectangle 136.png"
            alt="Vertical Image 2"
            width={151}
            height={155}
            className="object-cover"
          />
          <Image
            src="/images/Rectangle 137.png"
            alt="Vertical Image 3"
            width={151}
            height={155}
            className="object-cover"
          />
        </div>

        {/* Main Product Image and Content */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Main Product Image */}
          <div className="w-[375px] h-[487px] bg-gray-200 rounded-md overflow-hidden">
            <Image
              src="/images/Rectangle 138.png"
              alt="Main Product"
              width={500} // Adjust width as per your layout
              height={500} // Adjust height as per your layout
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Product Info */}
            <h2 className="text-3xl font-bold text-navyblue">
              Playwood Arm Chair
            </h2>

            {/* Star Rating */}
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-navyblue"> (22)</span>
            </div>

            {/* Price */}
            <div className="flex gap-4">
              <span className="text-navyblue font-semibold text-lg">
                $249.99
              </span>
              <span className="text-pink line-through text-lg">$349.99</span>
            </div>

            <p className="text-navyblue font-semibold mt-2">Color</p>

            {/* Description */}
            <p className="text-gray-700 mt-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>

            {/* Add to Cart Section */}
            <div className="flex items-center gap-4 mt-4">
              <button className="px-6 py-2 bg-blue-600 text-navyblue font-semibold rounded-md">
                Add to Cart
              </button>
              <button className="text-red-500">
                <FaHeart className="text-navyblue" />
              </button>
            </div>

            {/* Product Tags and Share */}
            <div className="mt-4">
              <p className="text-navyblue font-semibold text-sm">Categories:</p>
              <p className="text-navyblue font-semibold text-sm mt-6">Tags</p>
              <p className="text-navyblue font-semibold text-sm mt-6">Share</p>
              <div>
                <span className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <div className="w-6 h-6 text-navyblue">
                    <Link href="#">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div className="w-6 h-6 ml-3 text-pink">
                    <Link href="#">
                      <RxInstagramLogo />
                    </Link>
                  </div>
                  <div className="w-6 h-6 ml-3 text-navyblue">
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-12">
        {/* 4 Horizontal Headings */}
        <div className="flex flex-wrap justify-between gap-3 mb-8">
          <h3 className="text-lg font-semibold text-navyblue underline">
            Discription
          </h3>
          <h3 className="text-lg font-semibold text-navyblue">
            Additional Info
          </h3>
          <h3 className="text-xl font-semibold text-navyblue">Reviews</h3>
          <h3 className="text-lg font-semibold text-navyblue">Video</h3>
        </div>

        {/* Additional Heading */}
        <h4 className="text-lg font-semibold text-navyblue mb-4">
          Various Tempor
        </h4>

        {/* Paragraph Below Heading */}
        <p className="text-gray-400 text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab, velit
          delectus odio unde quidem rem ullam voluptates hic, dolores aliquam
          et, voluptas tempora eligendi labore officia fuga mollitia atque.
        </p>
        <p className="text-gray-400 text-sm mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          soluta magnam suscipit. Minus aspernatur laudantium accusamus atque
          vitae beatae repudiandae ex eius! Quos accusantium at.
        </p>
        <p className="text-gray-400 text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          minima, quasi officia eaque voluptate esse nihil nam reprehenderit,
          illo id quod, dicta qui voluptatem aut dolorem ab culpa sapiente.
        </p>

        {/* Another Heading with Arrow List */}
        <h4 className="text-lg font-semibold text-navyblue mb-4">
          More Details
        </h4>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <span className="text-black text-xl">➔</span>
            <p className="text-gray-400 text-sm">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-black text-xl">➔</span>
            <p className="text-gray-400 text-sm">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-black text-xl">➔</span>
            <p className="text-gray-400 text-sm">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;

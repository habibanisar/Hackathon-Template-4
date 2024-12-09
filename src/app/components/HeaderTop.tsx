import React from "react";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";

export default function HeaderTop() {
  return (
    <header className="bg-violeteColor text-white">
      <div className="max-w-[1024px] mx-auto flex justify-between items-center h-11 px-4 md:px-8 text-sm">
        {/* Left Section */}
        <div className="flex items-center space-x-4 md:space-x-8">
          <span className="flex items-center space-x-2">
            <CiMail />
            <span className="hidden sm:inline">example@gmail.com</span>
          </span>
          <span className="flex items-center space-x-2">
            <FiPhoneCall />
            <span className="hidden sm:inline">(123) 456-7890</span>
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center">
            <span className="hidden sm:inline">English</span>
            <RiArrowDropDownLine className="text-xl" />
          </div>
          <div className="flex items-center">
            <span className="hidden sm:inline">USD</span>
            <RiArrowDropDownLine className="text-xl" />
          </div>
          <a href="/login" className="hidden sm:inline hover:underline">
            Login
          </a>
          <a href="#" className="hidden sm:inline hover:underline">
            Wishlist
          </a>
          <GoHeart className="hidden sm:block" />
          <LuShoppingCart className="text-lg" />
        </div>
      </div>
    </header>
  );
}


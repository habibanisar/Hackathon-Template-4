import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from "next/link"; // Import Link from next/link

export default function Navbar() {
  return (
    <nav className="bg-white flex items-center justify-between px-4 md:px-16 lg:px-24 py-4">
      {/* Logo */}
      <div className="text-4xl font-bold text-navyblue">
        Hekto
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        <Link href="/">
          <li className="flex items-center space-x-1 hover:text-violet-500 cursor-pointer text-lg">
            <span className="text-red">Home</span>
            <RiArrowDropDownLine className="text-red text-lg" />
          </li>
        </Link>
        <li className="hover:text-violet-500 cursor-pointer text-lg">Pages</li>
        <li className="hover:text-violet-500 cursor-pointer text-lg">Products</li>
        <li className="hover:text-violet-500 cursor-pointer text-lg">Blog</li>
        <li className="hover:text-violet-500 cursor-pointer text-lg">Shop</li>  
        <Link href="/contact">
          <li className="hover:text-violet-500 cursor-pointer text-lg">Contact</li>
        </Link>
      </ul>

      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="hidden md:block h-8 px-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
        />
        <button className="bg-pink h-8 w-8 text-white rounded-md flex items-center justify-center hover:bg-violet-600">
          <CiSearch className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}

import React from "react";
import HeaderTop from "../components/HeaderTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <HeaderTop />
      <Navbar />

      {/* Image Section with Heading and Button */}
      <div className="relative w-full h-[286px] mt-12 bg-lightPurple">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-0">
          <h3 className="text-navyblue text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            My Account
          </h3>
          <h5 className="text-navyblue text-sm sm:text-base md:text-xl font-bold mb-4">
            Home. Pages. My Account
          </h5>
        </div>
      </div>

      {/* Login Card */}
      <div className="flex justify-center items-center mt-12 px-4">
        <div className="w-full max-w-[544px] bg-white shadow-md rounded-lg p-6 sm:p-8">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
            Login
          </h2>

          {/* Description Text */}
          <p className="text-gray-400 text-center mb-6">
            Please login using account details below.
          </p>

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Email Address */}
            <div>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email Address"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Password"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-left mt-2">
            <p  className="text-gray-400">
              Forgot your password?
            </p>
          </div>

          {/* Sign In Button */}
          <div className="mt-6">
            <button className="w-full bg-pink text-white py-2 rounded hover:bg-indigo-700">
              Sign In
            </button>
          </div>

          {/* Create Account */}
          <div className="text-center mt-4">
            <p className="text-gray-400">
            Don&apos;t have an account?Create Account
            </p>
          </div>
        </div>
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
     <Footer />
    </div>
  );
};

export default page;


import React from "react";
import HeaderTop from "../components/HeaderTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
const contact = () => {
  return (
    <div>
      <HeaderTop />
      <Navbar />
      <div className="relative w-full h-[286px] mt-12 bg-lightPurple">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-0">
          <h3 className="text-navyblue text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            Contact Us
          </h3>
          <h5 className="text-navyblue text-sm sm:text-base md:text-xl font-bold mb-4">
            Home. Pages. My Account
          </h5>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-start mt-12 px-4 space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-navyblue mb-6">Information About us</h2>
          <p className="text-gray-500 mb-2">
            We are always here to help you with your queries and concerns.
          </p>
          <p className="text-gray-500 mb-2">
            Feel free to contact us anytime, and we will do our best to respond as soon as possible.
          </p>
          <p className="text-gray-500 mb-6">
            Our team is dedicated to ensuring your satisfaction and providing the best possible experience.
          </p>
          {/* Dots */}
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-pink rounded-full"></div>
            <div className="w-6 h-6 bg-green-300 rounded-full"></div>
            <div className="w-6 h-6 bg-indigo-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-navyblue mb-6">Contact Way</h2>
          {/* Large Dots with Text */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-400 rounded-full mr-4"></div>
              <p className="text-gray-500">
                Call us anytime during business hours for support or inquiries.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-pink rounded-full mr-4"></div>
              <p className="text-gray-500">
                Email us your questions, and we will respond as soon as possible.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-400 rounded-full mr-4"></div>
              <p className="text-gray-500">
                Visit our office during working hours for direct assistance.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-400 rounded-full mr-4"></div>
              <p className="text-gray-500">
                Chat with our online support team available 24/7 for your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Form */}
      <div className="flex flex-col md:flex-row justify-center items-start mt-12 px-4 space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side: Get in Touch Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-navyblue mb-6">Get in Touch</h2>
          <p className="text-gray-500 mb-6">
            We are always here to help you with your queries and concerns. Feel free to contact us anytime.
          </p>

          {/* Contact Form */}
          <div className="w-full max-w-[534px] h-[414px] bg-white shadow-md rounded-lg p-6 space-y-6">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4">
              <div className="w-full">
                <label htmlFor="name" className="text-gray-500">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-gray-500">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-gray-500">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-gray-500">Your Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div className="mt-4">
              <button className="w-full sm:w-[157px] bg-pink text-white py-2 hover:bg-indigo-700">
                Send Mail
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="flex-1">
        <Image
          src="/images/Group 124.png"
          alt="Contact Image"
          width={723}
          height={692}
        />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;

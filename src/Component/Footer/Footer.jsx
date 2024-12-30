import React from "react";
import Logo from "../../assets/Footer/Icon.png";
import facebook from "../../assets/Footer/Facebook F.png";
import instagram from "../../assets/Footer/Instagram.png";
import youtube from "../../assets/Footer/YouTube Logo.png";

const Footer = () => {
  return (
    <div className=" border-t-2 border-gray-200 py-8 mt-8" style={{background: "#ECFBE8"}}>
      <div className="flex flex-wrap justify-between items-start max-w-6xl mx-auto px-4">
        {/* Company Section */}
        <div className="mb-6 sm:mb-0">
          <h1 className="text-lg font-semibold text-gray-800 mb-3">Company</h1>
          <ul>
            <li className="text-sm text-gray-600 mb-1 hover:text-gray-900 cursor-pointer">
              About Us
            </li>
            <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
              Refer a Friend
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="mb-6 sm:mb-0">
          <h1 className="text-lg font-semibold text-gray-800 mb-3">Support</h1>
          <ul>
            <li className="text-sm text-gray-600 mb-1 hover:text-gray-900 cursor-pointer">
              Help & FAQs
            </li>
            <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
              Contact Support
            </li>
          </ul>
        </div>

        {/* Logo and Social Media Section */}
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <img src={Logo} alt="Logo" className="w-32 h-32 mb-4" />
          <div className="flex gap-4">
            <div className="p-2 bg-white rounded-full shadow hover:shadow-lg transition">
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6 cursor-pointer hover:opacity-80"
              />
            </div>
            <div className="p-2 bg-white rounded-full shadow hover:shadow-lg transition">
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 h-6 cursor-pointer hover:opacity-80"
              />
            </div>
            <div className="p-2 bg-white rounded-full shadow hover:shadow-lg transition">
              <img
                src={youtube}
                alt="YouTube"
                className="w-6 h-6 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Stay in the Loop Section */}
        <div className="max-w-sm">
          <h1 className="text-lg font-semibold text-gray-800 mb-3">
            Stay in the Loop
          </h1>
          <p className="text-sm text-gray-600">
            Stay in the loop with special offers, plant-parenting tips, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

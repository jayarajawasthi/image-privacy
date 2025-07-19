import React from "react";
import imageprivacy from "../assets/imageprivacy.png";

const NavBar = () => {
  return (
    <nav className="bg-linear-to-r from-blue-100 to-blue-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="inline-block rounded p-[2px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 "
            >
              <div className="bg-white rounded p-1">
                <img
                  src={imageprivacy}
                  alt="Image Privacy Logo"
                  className="h-10 w-auto rounded block"
                />
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="flex  space-x-20">
            <li>
              <a
                href="#guide"
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                Guide
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-gray-700 font-medium hover:text-blue-500 "
              >
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

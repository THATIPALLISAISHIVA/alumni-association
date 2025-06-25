// src/components/Navbar.jsx
import React from "react";
import { FaUserCircle, FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side - Title */}
        <div className="flex items-center space-x-2">
          <FaGraduationCap className="text-white text-2xl" />
          <h1 className="text-2xl font-bold text-white text-center">Alumni Association</h1>
        </div>

        {/* Right Side - Profile
        <div className="flex items-center space-x-3">
          <span className="text-white font-medium">John Doe</span>
          <FaUserCircle className="text-white text-2xl hover:text-indigo-200 transition-colors cursor-pointer" />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
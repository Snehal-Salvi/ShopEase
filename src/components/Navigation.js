import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// Navigation component that renders a dynamic navigation menu
const Navigation = ({ navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu toggle

  // Function to toggle the mobile menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo and brand name */}
          <Link
            to="/"
            className="flex items-center hover:bg-gray-100 rounded-full p-2"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 mr-2 rounded-full hover:shadow-md"
            />
            <div className="text-xl md:text-2xl font-bold">ShopEase</div>
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-2xl cursor-pointer" /> // Close icon if menu is open
          ) : (
            <FaBars className="text-2xl cursor-pointer" /> // Menu icon if menu is closed
          )}
        </div>

        {/* Navigation links; show block for mobile or flex for desktop */}
        <nav
          className={`md:flex md:space-x-4 ${menuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 mt-4 md:mt-0 bg-blue-300 md:bg-transparent p-4 md:p-0">
            {/* Map over navItems to dynamically generate menu links */}
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.route}
                  className="flex items-center hover:text-blue-600 font-bold text-lg md:text-xl"
                >
                  <item.icon className="mr-2" /> {/* Display the icon */}
                  {item.name} {/* Display the name */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navigation;

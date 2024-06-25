import React from "react";
import { FaHome, FaShoppingCart, FaBoxOpen } from "react-icons/fa";
import Navigation from "./Navigation";

// Header component that includes the navigation bar
const Header = () => {
  // Array of navigation items with names, routes, and icons
  const navItems = [
    { name: "Home", route: "/", icon: FaHome },
    { name: "Products", route: "/", icon: FaBoxOpen },
    { name: "Cart", route: "/cart", icon: FaShoppingCart },
  ];

  return (
    <header className="bg-blue-200 p-4 shadow">
      <Navigation navItems={navItems} />{" "}
      {/* Passing navItems as props to Navigation */}
    </header>
  );
};

export default Header;

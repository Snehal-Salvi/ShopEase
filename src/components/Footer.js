import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//Footer component
const Footer = () => {
  return (
    <footer className="bg-blue-200 p-2 mt-4">
      <div className="container mx-auto text-center ">
        <p className="mb-4">&copy; 2024 ShopEase. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a
              href="https://www.instagram.com/snehal.salvi_/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/snehal.salvi.1422"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/salvi_snehal"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>

          <li>
            <a
              href="http://linkedin.com/in/snehalsalvi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

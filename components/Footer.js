// components/Footer.js

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit in diam euismod tincidunt.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Shop</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Your E-commerce Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

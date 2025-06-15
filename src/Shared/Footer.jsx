import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">


        <div>
          <h2 className="text-2xl font-bold text-white mb-3">BusyBOX</h2>
          <p className="text-sm leading-relaxed">
            Elevate your WordPress experience with flexible, blazing-fast themes.
          </p>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

 
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Get updates about new themes, offers & insights.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-l-lg text-sm bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-500 border-gray-950 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-r-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center text-sm py-6 text-gray-500 px-4">
        © 2025 Themefrey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand */}
        <div>
          <h3 className="font-serif text-lg">Izashub</h3>
          <p className="text-sm text-gray-600 mt-2">
            Curated luxury fragrances.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/shop" className="hover:text-amber-600 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-amber-600 transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-sm">
            <a
              href="tel:+233593076039"
              className="hover:text-amber-600 transition"
            >
              +233 59 307 6039
            </a>
          </p>
          <p className="text-sm mt-1">
            <a
              href="mailto:support@izashub.com"
              className="hover:text-amber-600 transition"
            >
              support@izashub.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} A. Sumayah. All rights reserved.
      </div>
    </footer>
  );
}

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { items } = useCart();
  const { user, signOut } = useAuth();

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-800 to-amber-500 flex items-center justify-center overflow-hidden">
            <img
              src="src/assets/logo.jpg"
              alt="logo"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-serif text-amber-400 tracking-wide">
              Izashub
            </h1>
            <p className="text-xs text-gray-300 italic">
              Elevate Your Scent & Style
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-amber-400 transition ${
                isActive ? "text-amber-400" : "text-gray-200"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `hover:text-amber-400 transition ${
                isActive ? "text-amber-400" : "text-gray-200"
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-amber-400 transition ${
                isActive ? "text-amber-400" : "text-gray-200"
              }`
            }
          >
            About
          </NavLink>
        </nav>

        {/* User + Cart */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                to="/profile"
                className="hover:text-amber-400 transition text-sm"
              >
                Account
              </Link>
              <button
                onClick={signOut}
                className="text-sm text-red-400 hover:text-red-300 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-sm text-gray-200 hover:text-amber-400 transition"
            >
              Log In
            </Link>
          )}

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative text-sm hover:text-amber-400 transition"
          >
            🛍 Cart
            {items.length > 0 && (
              <span className="absolute -top-2 -right-3 text-xs bg-amber-500 text-black font-bold rounded-full px-1.5 py-0.5">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

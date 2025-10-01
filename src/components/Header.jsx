import React from "react"; // ✅ Add this line
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { items } = useCart();
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold">
            AP
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-serif">Izashub</h1>
            <p className="text-xs">Luxury Perfumes</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-4">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* User + Cart */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link to="/account" className="px-3 py-2">Account</Link>
              <button
                onClick={signOut}
                className="px-3 py-2 text-red-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/account" className="px-3 py-2">Sign In</Link>
          )}

          <Link to="/cart" className="relative px-3 py-2">
            Cart
            {items.length > 0 && (
              <span className="ml-2 text-xs bg-amber-600 text-white rounded-full px-1">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

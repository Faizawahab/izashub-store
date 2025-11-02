import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { signIn } = useAuth();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Please enter your phone number");
      return;
    }
    signIn(phone);
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-amber-900">
      <div className="bg-black/80 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md border border-amber-500/40">
        {/* Logo and Title */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-purple-800 flex items-center justify-center overflow-hidden">
            <img
              src="src/assets/logo.jpg"
              alt="Izashub logo"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-serif text-amber-400">Welcome Back</h2>
          <p className="text-sm text-gray-300 mt-1 italic">
            Login to continue your luxury experience
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 0593076039"
              className="block w-full p-3 border border-amber-400/30 bg-transparent text-white rounded-md placeholder-gray-400 focus:ring-amber-400 focus:border-amber-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-amber-400 font-semibold hover:text-amber-300 transition"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

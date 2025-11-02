import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.phone || !form.firstName || !form.lastName) {
      alert("Please fill in all required fields.");
      return;
    }

    signUp(form);
    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-amber-900 px-6 py-12">
      <div className="w-full max-w-md bg-black/80 shadow-2xl rounded-2xl p-8 border border-amber-600/30 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-amber-500 tracking-wide">
          Create Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-amber-300 mb-1">
              Title
            </label>
            <select
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-amber-500/40 bg-transparent text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            >
              <option value="">Select Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
              <option value="Dr.">Dr.</option>
            </select>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-amber-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full border border-amber-500/40 bg-transparent text-white rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-amber-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full border border-amber-500/40 bg-transparent text-white rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-amber-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-amber-500/40 bg-transparent text-white rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-lg font-semibold tracking-wide transition-all shadow-md hover:shadow-amber-600/50"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-5">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-amber-400 font-semibold hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

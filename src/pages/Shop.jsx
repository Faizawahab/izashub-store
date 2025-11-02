import React from "react";
import { useState } from "react";
import PRODUCTS from "../data/products";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Shop() {
  const q = useQuery();
  const initial = q.get("category") || "All";
  const [category, setCategory] = useState(initial);
  const [search, setSearch] = useState("");

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  const filtered = PRODUCTS.filter(
    (p) =>
      (category === "All" ? true : p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Shop</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </header>

      {/* Category Filter */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg border ${
              category === cat
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">No products found.</p>
      )}
    </main>
  );
}

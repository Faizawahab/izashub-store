import React from "react";   // 👈 add this line
import ProductCard from "../components/ProductCard";
import PRODUCTS from "../data/products";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="font-serif text-4xl">Discover your signature scent</h1>
        </div>
        <div>
          <img
            src="/images/hero-perfume.jpg"
            alt="hero"
            className="w-full rounded"
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl">Featured</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {PRODUCTS.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

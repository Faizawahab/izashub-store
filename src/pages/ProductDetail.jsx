import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams(); // get product id from URL
  const { addToCart } = useCart();

  // Example product data (replace this with API call or props)
  const product = {
    id,
    name: "Luxury Oud Perfume",
    description:
      "A long-lasting fragrance with notes of oud, amber, and musk. Perfect for both men and women who want to make a bold statement.",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552263d1d?auto=format&fit=crop&w=600&q=80",
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:flex gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-3">{product.description}</p>
            <p className="text-2xl font-semibold text-amber-700 mt-4">
              GH₵ {product.price.toFixed(2)}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Add to Cart
            </button>
            <a
              href={`https://wa.me/233000000000?text=Hello, I'm interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

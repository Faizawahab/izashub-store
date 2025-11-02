import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-amber-950 px-6 py-12 flex justify-center">
      <section className="w-full max-w-4xl bg-black/70 backdrop-blur-md border border-amber-600/30 shadow-2xl rounded-2xl p-8">
        <h2 className="text-4xl font-serif font-bold text-center text-amber-500 mb-10">
          Your Shopping Cart
        </h2>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-300 mb-6 text-lg">
              Your cart is currently empty.
            </p>
            <Link
              to="/shop"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-amber-600/40 transition-all font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-amber-500/30 pb-5"
              >
                {/* Product Info */}
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border border-amber-600/40"
                  />
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm text-amber-300">
                      {item.quantity} × GHS {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                  <p className="font-semibold text-amber-400 text-lg">
                    GHS {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-400 hover:underline transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="border-t border-amber-600/30 pt-6 flex justify-between items-center mt-6">
              <button
                onClick={clearCart}
                className="text-red-500 hover:underline font-medium hover:text-red-400 transition"
              >
                Clear Cart
              </button>
              <div className="text-right">
                <p className="text-lg font-semibold text-white mb-3">
                  Total:{" "}
                  <span className="text-amber-400">
                    GHS {total.toFixed(2)}
                  </span>
                </p>
                <Link
                  to="/checkout"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-amber-600/40 transition-all font-semibold"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Cart;

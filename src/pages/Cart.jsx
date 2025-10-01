import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { items, removeFromCart, clearCart } = useCart()

  // Calculate total price
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif font-bold text-amber-800 mb-8">
        Your Shopping Cart
      </h2>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 mb-6">Your cart is currently empty.</p>
          <Link
            to="/shop"
            className="bg-amber-700 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.quantity} × GHS {item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6">
                <p className="font-semibold text-amber-800">
                  GHS {(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="border-t pt-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="text-red-600 hover:underline"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-800">
                Total: GHS {total.toFixed(2)}
              </p>
              <Link
                to="/checkout"
                className="mt-3 inline-block bg-amber-700 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-800 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart

import React from 'react'
import { useCart } from '../context/CartContext'

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart()

  return (
    <div className="flex items-center justify-between border-b py-4">
      {/* Product image */}
      <div className="flex items-center gap-4">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-20 h-20 object-cover rounded-md" 
        />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600">₵{item.price}</p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-3">
        <button 
          className="px-2 py-1 bg-gray-200 rounded" 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="font-medium">{item.quantity}</span>
        <button 
          className="px-2 py-1 bg-gray-200 rounded" 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>

      {/* Remove button */}
      <button 
        className="ml-4 text-red-600 hover:underline"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem

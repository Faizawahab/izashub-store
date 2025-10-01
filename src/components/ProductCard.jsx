import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import WhatsAppButton from './WhatsAppButton';
import QuantitySelector from './QuantitySelector';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [countOpen, setCountOpen] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart(product, qty);
    setCountOpen(true);
  };

  return (
    <article className="border rounded-lg p-3">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-48 w-full object-cover rounded"
        />
      </Link>
      <h4 className="mt-2 font-medium">{product.title}</h4>

      <div className="flex items-center justify-between mt-2">
        <div className="text-sm font-semibold">GHS {product.price}</div>
        <div className="flex items-center gap-2">
          <WhatsAppButton product={product} qty={qty} />
          {!countOpen ? (
            <button
              onClick={handleAdd}
              className="px-3 py-1 bg-amber-600 text-white rounded"
            >
              Add
            </button>
          ) : (
            <QuantitySelector qty={qty} setQty={setQty} />
          )}
        </div>
      </div>
    </article>
  );
}

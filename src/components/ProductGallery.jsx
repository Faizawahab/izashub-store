import React from 'react'
import ProductCard from './ProductCard'
import PRODUCTS from '../data/products'

function ProductGallery({ products = PRODUCTS }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Our Collection</h2>
      {products.length === 0 ? (
        <p className="text-gray-600">No products available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
        </div>
      )}
    </section>
  )
}

export default ProductGallery

import React from 'react'

// Sample review data (you can fetch this from an API later)
const REVIEWS = [
  {
    id: 1,
    name: 'Aisha M.',
    rating: 5,
    comment: 'Absolutely love the quality of the abayas. Will definitely order again!',
  },
  {
    id: 2,
    name: 'Khalid O.',
    rating: 4,
    comment: 'Perfumes smell amazing and last long. Great value for money.',
  },
  {
    id: 3,
    name: 'Zainab K.',
    rating: 5,
    comment: 'Excellent service and fast delivery. Highly recommended!',
  },
]

function ReviewSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>
      
      {REVIEWS.length === 0 ? (
        <p className="text-gray-600 text-center">No reviews yet. Be the first to review!</p>
      ) : (
        <div className="space-y-6">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="flex items-center mb-2">
                <span className="font-semibold">{review.name}</span>
                <div className="ml-3 text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ReviewSection

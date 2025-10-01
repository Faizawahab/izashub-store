import React from 'react'

function About() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-6">
          About A. Sumayah
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold">A. Sumayah</span>, we believe that elegance is more than 
          appearance—it’s an experience. Our curated collection of 
          <span className="text-amber-700"> luxury perfumes</span> and 
          <span className="text-amber-700"> modest fashion</span> pieces are designed 
          to help you <strong>smell good, look good, and feel confident</strong> every day.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          From timeless abayas and khimars to captivating oil perfumes, 
          we bring you products crafted with quality, comfort, and 
          sophistication in mind. Each piece tells a story of heritage and 
          modern style—made for today’s confident woman and gentleman.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          Whether you are searching for a signature scent or a statement outfit, 
          our mission is to provide you with <em>affordable luxury</em> that 
          makes you stand out effortlessly. At A. Sumayah, every detail 
          matters, because <strong>you deserve the best</strong>.
        </p>
        <div className="flex justify-center">
          <button className="bg-amber-700 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-800 transition">
            Shop Our Collection
          </button>
        </div>
      </div>
    </section>
  )
}

export default About

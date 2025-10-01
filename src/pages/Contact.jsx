import React from 'react'

function Contact() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We’d love to hear from you! Whether you have a question about our
          perfumes, modest fashion collection, or need help with an order,
          our team is here to assist you.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 text-center mb-12">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-amber-700 mb-2">Phone</h3>
          <p className="text-gray-600">+233 55 123 4567</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-amber-700 mb-2">Email</h3>
          <p className="text-gray-600">support@asumayah.com</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-amber-700 mb-2">WhatsApp</h3>
          <p className="text-gray-600">+233 50 765 4321</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block text-left font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Write your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-amber-700 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

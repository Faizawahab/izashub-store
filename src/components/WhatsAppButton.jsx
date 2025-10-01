import React from "react";

export default function WhatsAppButton({ product, qty = 1 }) {
  const businessPhone = "+233593076039"; // Ghana format with country code
  const text = `Hi, I'd like to order ${qty} x ${product.title}`;
  const href = `https://wa.me/${businessPhone.replace(/[+\s]/g, "")}?text=${encodeURIComponent(
    text
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Order ${product.title} on WhatsApp`}
      className="px-3 py-1 border rounded bg-green-500 text-white hover:bg-green-600 transition"
    >
      WhatsApp
    </a>
  );
}

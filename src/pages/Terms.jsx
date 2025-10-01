import React from "react";

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>
        <p className="text-gray-600 mb-6 text-center">
          Welcome to <span className="font-semibold">Lux Shop</span>. By
          accessing or using our website and services, you agree to be bound by
          the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Website</h2>
        <p className="text-gray-600 mb-4">
          You agree to use this website only for lawful purposes and in a manner
          that does not infringe the rights of, restrict, or inhibit anyone
          else’s use of the website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Products & Orders</h2>
        <p className="text-gray-600 mb-4">
          All products displayed on our website are subject to availability. We
          reserve the right to refuse or cancel any order at our discretion. By
          placing an order, you confirm that the details provided are accurate
          and complete.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Pricing & Payment</h2>
        <p className="text-gray-600 mb-4">
          All prices are listed in Ghanaian Cedis (GH₵) unless stated otherwise.
          Payment must be made in full at the time of purchase or upon delivery
          (if payment on delivery is available). We reserve the right to update
          prices at any time.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Shipping & Delivery</h2>
        <p className="text-gray-600 mb-4">
          Delivery times may vary depending on location and product availability.
          We aim to deliver orders within the communicated timeframe but are not
          liable for delays caused by unforeseen circumstances.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Returns & Exchanges</h2>
        <p className="text-gray-600 mb-4">
          Due to the nature of perfumes and clothing, returns are accepted only
          if the product is unused, unopened, and in its original packaging. You
          must notify us within 7 days of receiving your order to initiate a
          return or exchange.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Privacy Policy</h2>
        <p className="text-gray-600 mb-4">
          Your personal information will be handled in accordance with our{" "}
          <a href="/privacy-policy" className="text-amber-600 hover:underline">
            Privacy Policy
          </a>
          . By using our services, you consent to such processing.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">
          Lux Shop shall not be held responsible for any indirect, incidental, or
          consequential damages arising from the use of our website or products.
          Our liability is limited to the maximum extent permitted by law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Governing Law</h2>
        <p className="text-gray-600 mb-4">
          These terms are governed by and construed in accordance with the laws
          of Ghana. Any disputes shall be subject to the exclusive jurisdiction
          of the courts of Ghana.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to modify or update these Terms & Conditions at
          any time. Changes will take effect immediately upon posting on this
          page.
        </p>

        <p className="text-sm text-gray-400 mt-8 text-center">
          Last Updated: September 2025
        </p>
      </div>
    </div>
  );
}

export default Terms;

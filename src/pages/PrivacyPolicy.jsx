import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          At <span className="font-semibold">Lux Shop</span>, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data when you use our
          website and services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Personal details such as your name, phone number, and title when you sign up.</li>
          <li>Purchase details including order history and preferences.</li>
          <li>Technical data such as IP address, browser type, and device information.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Process your orders and manage your account.</li>
          <li>Improve our products, services, and website experience.</li>
          <li>Send you relevant updates, promotions, and offers.</li>
          <li>Ensure compliance with legal and regulatory requirements.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
        <p className="text-gray-600 mb-4">
          We implement industry-standard security measures to protect your data
          against unauthorized access, alteration, or disclosure. However, please
          note that no online system is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing of Information</h2>
        <p className="text-gray-600 mb-4">
          We do not sell or trade your personal information. We may share your
          information with trusted service providers who help us operate our
          business, process payments, or deliver products to you — under strict
          confidentiality agreements.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Access and update your personal information at any time.</li>
          <li>Request deletion of your account and personal data.</li>
          <li>Opt-out of marketing communications by updating your preferences.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates to This Policy</h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Last Updated" date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us
          at:  
          <br />
          <span className="font-semibold">Email:</span> support@luxshop.com  
          <br />
          <span className="font-semibold">Phone:</span> +233-000-000-000
        </p>

        <p className="text-sm text-gray-400 mt-8 text-center">
          Last Updated: September 2025
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

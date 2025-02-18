"use client"

import React from 'react';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
        <p className="text-gray-700 mb-4">Thank you for your order!</p>
        <p className="text-gray-700 mb-4">Your order has been successfully placed.</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Details:</h2>
          <p className="text-gray-700">Order ID: #{Math.random().toString(36).substr(2, 9)}</p>
          <p className="text-gray-700">Estimated Delivery: 5-7 business days</p>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">Use code <strong>WELCOME10</strong> for 10% off your next purchase!</p>
          <Link
            href="/"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

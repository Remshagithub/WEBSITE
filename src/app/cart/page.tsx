"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface ICartItem {
  id: number;
  title: string;
  price: number;
  selectedSize: string;
  selectedColor: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(items);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="border-b py-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700">Size: {item.selectedSize}</p>
                <p className="text-gray-700">Color: {item.selectedColor}</p>
                <p className="text-gray-700">Price: ${item.price}</p>
              </div>
            ))}
            <div className="mt-6">
              <Link
                href="/checkout"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 block text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

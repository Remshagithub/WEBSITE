"use client"

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

// Interface for Product
interface IProduct {
  id: number;
  title: string;
  image?: string[] | StaticImageData | string;
  slug: string;
  price: number;
  category: string;
  description: string;
  size: string[];
  color: string[];
  qty: number; 
  discount?: number;
}

// Products Data
const products: IProduct[] = [
  {
    id: 1,
    title: "Stylish T-Shirt",
    image: "/arrival-img1.png",
    slug: "stylish-t-shirt",
    price: 1200,
    category: "Clothing",
    description: "A high quality cotton t-shirt with a stylish design.",
    size: ["S", "M", "L", "XL"],
    color: ["blue", "black"],
    qty: 10,
    discount: 10,
  },
  {
    id: 2,
    title: "Leather Wallet",
    image: ["/arrival-img3.png", "/arrival-img4.png"],
    slug: "leather-wallet",
    price: 1500,
    category: "Accessories",
    description: "A premium leather wallet with multiple compartments.",
    size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "black"],
    qty: 1,
    discount: 0,
  },
  {
    id: 3,
    title: "Running Shoes",
    image: ["/sell1.png", "/sell2.png"],
    slug: "running-shoes",
    price: 3000,
    category: "Footwear",
    description: "Comfortable and durable running shoes for daily wear.",
    size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "black"],
    qty: 1,
    discount: 15,
  },
  {
    id: 4,
    title: "Smart Watch",
    image: ["/sell3.png", "/arrival-img4.png"],
    slug: "smart-watch",
    price: 5000,
    category: "Electronics",
    description: "A sleek smart watch with fitness tracking features.",
    size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "black"],
    qty: 1,
    discount: 0,
  },
];

type Props = {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: Props) {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to cart.");
      return;
    }

    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
    };

    // Save to localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Redirect to cart page
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            {Array.isArray(product.image) ? (
              product.image.map((img, index) => (
                <Image key={index} src={img} alt={`${product.title} ${index + 1}`} width={500} height={500} className="rounded-lg" />
              ))
            ) : (
              <Image src={product.image as string} alt={product.title} width={500} height={500} className="rounded-lg" />
            )}
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">${product.price}</p>
            {product.discount && (
              <p className="text-red-500 font-semibold mb-4">
                Discount: {product.discount}%
              </p>
            )}
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800">Available Sizes:</h3>
              <div className="flex gap-2 mt-2">
                {product.size.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedSize === size
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800">Colors:</h3>
              <div className="flex gap-2 mt-2">
                {product.color.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>

            <p className="text-gray-700 mb-6">In Stock: {product.qty}</p>

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart Icon */}
      <div className="fixed top-4 right-4">
        <div className="relative">
          <span className="text-2xl">🛒</span>
          {JSON.parse(localStorage.getItem('cart') || '[]').length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
              {JSON.parse(localStorage.getItem('cart') || '[]').length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
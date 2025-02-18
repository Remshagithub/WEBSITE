import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Product Interface
interface IProduct {
  id: number;
  title: string;
  image?: string[] | string;
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
    description: "A high-quality cotton t-shirt with a stylish design.",
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
    qty: 5,
    discount: 15,
  },
  {
    id: 4,
    title: "Smart Watch",
    image: ["/sell3.png", "/arrival-img4.png"],
    slug: "smart-watch",
    price: 5000,
    category: "Electronics",
    description: "A sleek smartwatch with fitness tracking features.",
    size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "black"],
    qty: 3,
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/product/${product.slug}`} key={product.id} className="group">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {product.image && (
                  Array.isArray(product.image) ? (
                    <Image
                      src={product.image[0]}
                      alt={product.title}
                      fill
                      priority
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      priority
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )
                )}
                {product.discount && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <p className="text-sm font-medium text-gray-500 mb-1">{product.category}</p>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {product.title}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    {product.discount && (
                      <span className="text-sm text-gray-500 line-through">
                        ${Math.round(product.price * (1 + product.discount/100))}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {product.qty} in stock
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import Image, { StaticImageData } from 'next/image';

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

// Product Data
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
  }
];

// Products Component
function Products() {
  return (
    <div className="art-36">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-details">
            <h2>{product.title}</h2>
            {product.image && (
              <Image
                src={Array.isArray(product.image) ? product.image[0] : product.image}
                alt={product.title}
                width={200}
                height={200}
              />
            )}
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Sizes:</strong> {product.size.join(", ")}</p>
            <p><strong>Colors:</strong> {product.color.join(", ")}</p>
            <p><strong>Quantity:</strong> {product.qty}</p>
            {product.discount ? (
              <p><strong>Discount:</strong> {product.discount}%</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
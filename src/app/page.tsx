'use client';
import React from 'react';
import CartIcon from '../components/CardIcon';
import Hero from '../components/Hero';
import FontShowcase from '../components/Font';
import { useCart } from '../context/CartContext';

export default function Page() {
  const { cart } = useCart();

  return (
    <main>
      <CartIcon cartCount={cart.length} />
      <Hero />
      <FontShowcase />
    </main>
  );
}
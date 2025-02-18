import React from 'react';

interface CartIconProps {
  cartCount: number;
}

export default function CartIcon({ cartCount }: CartIconProps) {
  return (
    <div className="fixed top-4 right-4">
      <div className="relative">
        <span className="text-2xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
}
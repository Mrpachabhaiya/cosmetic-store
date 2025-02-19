"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const dummyCartItems: CartItem[] = [
  {
    id: "1",
    name: "Luxury Face Cream",
    price: 49.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Premium Lipstick",
    price: 24.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80",
  },
];

export function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const total = dummyCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ShoppingBag className="h-5 w-5" />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-600 text-xs text-white">
          {dummyCartItems.length}
        </span>
      </Button>

      {isOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-80 rounded-lg bg-white p-4 shadow-lg"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="mb-4 flex justify-between">
            <h3 className="font-medium">Shopping Cart</h3>
            <span className="text-sm text-gray-500">
              {dummyCartItems.length} items
            </span>
          </div>

          <div className="max-h-64 space-y-4 overflow-y-auto">
            {dummyCartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </span>
                    <span className="text-sm font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="mb-4 flex justify-between">
              <span className="font-medium">Total:</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <Link href="/cart">
              <Button className="w-full bg-pink-600 hover:bg-pink-700">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

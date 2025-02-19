"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  {
    title: "Makeup",
    items: ["Face", "Eyes", "Lips", "Cheeks", "Brushes", "View All"],
  },
  {
    title: "Skin",
    items: [
      "Moisturizers",
      "Cleansers",
      "Masks",
      "Sunscreen",
      "Serums",
      "View All",
    ],
  },
  {
    title: "Hair",
    items: [
      "Shampoo",
      "Conditioner",
      "Hair Color",
      "Styling",
      "Tools",
      "View All",
    ],
  },
  {
    title: "Fragrance",
    items: [
      "Perfumes",
      "Gift Sets",
      "Minis",
      "Luxury",
      "New Arrivals",
      "View All",
    ],
  },
  {
    title: "Bath & Body",
    items: ["Shower Gels", "Lotions", "Scrubs", "Gift Sets", "View All"],
  },
  {
    title: "Natural",
    items: ["Skincare", "Makeup", "Hair", "Body Care", "View All"],
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-pink-600 py-2 text-center text-sm text-white">
        <span>
          Extra 20% Off On Your First App Purchase | USE CODE EXTRA20%
        </span>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto px-2 md:px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold tracking-tight text-pink-600">
                  GLOW
                </span>
              </Link>
            </div>

            <div className="hidden flex-1 items-center justify-center px-8 md:flex">
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button
                variant="default"
                className="hidden bg-pink-600 hover:bg-pink-700 md:flex"
              >
                <User className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Menu */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-between">
              {categories.map((category) => (
                <NavigationMenuItem key={category.title}>
                  <NavigationMenuTrigger className="h-10 text-sm font-medium">
                    {category.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {category.items.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/category/${category.title.toLowerCase()}/${item.toLowerCase()}`}
                              className="block rounded-md p-2 text-sm hover:bg-pink-50 hover:text-pink-600"
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

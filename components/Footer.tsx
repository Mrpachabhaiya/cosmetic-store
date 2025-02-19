"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { title: "Who We Are", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Authenticity", href: "#" },
    { title: "Press", href: "#" },
    { title: "Testimonials", href: "#" },
    { title: "Glow CSR", href: "#" },
    { title: "Responsible Disclosure", href: "#" },
    { title: "Investor Relations", href: "#" },
  ],
  help: [
    { title: "Contact Us", href: "#" },
    { title: "Frequently asked questions", href: "#" },
    { title: "Store Locator", href: "#" },
    { title: "Cancellation & Return", href: "#" },
    { title: "Shipping & Delivery", href: "#" },
    { title: "Sell on Glow", href: "#" },
  ],
  inspire: [
    { title: "Beauty Book", href: "#" },
    { title: "Glow Network", href: "#" },
    { title: "Buying Guides", href: "#" },
    { title: "Glow Fashion", href: "#" },
    { title: "Glow Pro", href: "#" },
  ],
  quickLinks: [
    { title: "Offer Zone", href: "#" },
    { title: "New Launches", href: "#" },
    { title: "Glow Man", href: "#" },
    { title: "Glow Fashion", href: "#" },
    { title: "Glow Pro", href: "#" },
    { title: "Sitemap", href: "#" },
  ],
  topCategories: [
    { title: "Makeup", href: "#" },
    { title: "Skin", href: "#" },
    { title: "Hair", href: "#" },
    { title: "Bath & Body", href: "#" },
    { title: "Appliances", href: "#" },
    { title: "Mom and Baby", href: "#" },
    { title: "Health & Wellness", href: "#" },
    { title: "Fragrance", href: "#" },
    { title: "Natural", href: "#" },
    { title: "Luxe", href: "#" },
  ],
};

const features = [
  {
    icon: "🚚",
    title: "FREE SHIPPING",
    description: "On Orders Above ₹299",
  },
  {
    icon: "↩️",
    title: "EASY RETURNS",
    description: "15-Day Return Policy",
  },
  {
    icon: "✅",
    title: "100% AUTHENTIC",
    description: "Products Sourced Directly",
  },
  {
    icon: "🛍️",
    title: "1900+ BRANDS",
    description: "12 Lakh+ Products",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#3f414d] text-white">
      {/* App Download Section */}
      <div className="border-b border-gray-700 bg-[#2f3037]">
        <div className="mx-auto px-2 md:px-4 flex flex-col justify-between py-3 md:flex-row md:items-center">
          <div className="flex flex-col items-center md:flex-row">
            <span className="text-sm font-medium uppercase text-center md:text-left">
              Experience the Glow beauti products
            </span>
            <div className="mt-2 md:mt-0 md:ml-4 flex space-x-2">
              <Link href="#" className="h-8 w-24">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80"
                  alt="Get it on Google Play"
                  width={96}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </Link>
              <Link href="#" className="h-8 w-24">
                <Image
                  src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80"
                  alt="Download on the App Store"
                  width={96}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-center text-sm md:flex-row">
            <span className="mr-2">FOR ANY HELP, YOU MAY CALL US AT</span>
            <span className="font-medium">1800-267-4444</span>
            <span className="ml-2 text-xs">
              (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto px-4  py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <span className="text-2xl font-bold text-white">Glow</span>
            </Link>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-pink-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Help</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.help.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-pink-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inspire Me */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Inspire Me</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.inspire.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-pink-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-pink-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Top Categories</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.topCategories.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-pink-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-gray-700 bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center justify-center text-center"
              >
                <div>
                  <span className="mb-2 block text-2xl">{feature.icon}</span>
                  <h4 className="text-sm font-medium text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-sm text-gray-600">
            Show us some love ❤ on social
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-pink-600">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Terms and Copyright */}
      <div className="bg-pink-600 py-4 text-center text-sm text-white">
        <div className="container mx-auto px-4">
          <div className="mb-2 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Shipping Policy
            </Link>
            <Link href="#" className="hover:underline">
              Cancellation Policy
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
          <p>© 2024 GLOW E-RETAIL LIMITED All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

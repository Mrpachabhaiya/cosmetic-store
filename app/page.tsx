import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    title: "Skincare Essentials",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80",
    tag: "NEW",
  },
  {
    title: "Makeup Collection",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80",
    tag: "TRENDING",
  },
  {
    title: "Wanderlust",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
    tag: "SALE",
  },
  {
    title: "Miss Claire",
    image: "/img-30.jpg",
    tag: "FEATURED",
  },
];

const topBrands = [
  {
    name: "Legendary Beauty",
    description: "20% OFF on Luxury & More",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
    action: "Shop Now",
  },
  {
    name: "Mini on ₹2500+",
    description: "Moisturizing Duo!",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80",
    action: "Shop Now",
  },
  {
    name: "Upto 20% Off",
    description: "Products on SALE!",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
    action: "More",
  },
];

const focusProducts = [
  {
    title: "Runway ready slick",
    subtitle: "Upto 10% Off",
    description: "Zero Cast Waxstick",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
  },
  {
    title: "SUNKISSED HIGHLIGHTER + BLUSH",
    subtitle: "New Launch",
    description: "12H Golden Hour Glow",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80",
  },
  {
    title: "Selfcare Sheet Masks",
    subtitle: "Buy 5 Get 5",
    description: "On Sheet Mask",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
  },
];

const luxuryBrands = [
  "Murad",
  "Kérastase",
  "REDKEN",
  "KAY ALI",
  "GUCCI",
  "YvesSaintLaurent",
];

const products = [
  {
    imageSrc: "/img-30.jpg",
    title: "Matte Lipstick - Ruby Red",
    description: "Long-lasting, bold color",
  },
  {
    imageSrc: "/img-2.jpg",
    title: "Hydrating Foundation - Ivory",
    description: "Lightweight, full coverage",
  },
  {
    imageSrc: "/img-3.jpg",
    title: "Eyeshadow Palette - Nude Tones",
    description: "12 shades for every look",
  },
  {
    imageSrc: "/img-4.jpg",
    title: "Mascara - Volume Boost",
    description: "Lengthens and volumizes",
  },
  {
    imageSrc: "/img-5.jpg",
    title: "Blush - Soft Pink",
    description: "Natural, buildable color",
  },
  {
    imageSrc: "/img-6.jpg",
    title: "Highlighter - Golden Glow",
    description: "Radiant, shimmering finish",
  },
  {
    imageSrc: "/img-7.jpg",
    title: "Setting Spray - Matte Finish",
    description: "Keeps makeup in place",
  },
  {
    imageSrc: "/img-8.jpg",
    title: "Lip Gloss - Clear Shine",
    description: "Non-sticky, glossy finish",
  },
  {
    imageSrc: "/img-9.jpg",
    title: "Concealer - Light Beige",
    description: "Covers blemishes and dark circles",
  },
  {
    imageSrc: "/img-10.jpg",
    title: "Eyebrow Pencil - Dark Brown",
    description: "Precise, natural-looking brows",
  },
  {
    imageSrc: "/img-11.jpg",
    title: "Lip Liner - Rosewood",
    description: "Defines and enhances lips",
  },
  {
    imageSrc: "/img-12.jpg",
    title: "Bronzer - Sun-Kissed",
    description: "Warm, natural glow",
  },
  {
    imageSrc: "/img-13.jpg",
    title: "Makeup Remover - Gentle Formula",
    description: "Effortlessly removes makeup",
  },
  {
    imageSrc: "/img-14.jpg",
    title: "Primer - Pore Minimizer",
    description: "Smooths skin for flawless makeup",
  },
  {
    imageSrc: "/img-15.jpg",
    title: "Lip Balm - Coconut",
    description: "Hydrates and nourishes lips",
  },
  {
    imageSrc: "/img-16.jpg",
    title: "Eyeliner - Jet Black",
    description: "Waterproof, smudge-proof",
  },
  {
    imageSrc: "/img-17.jpg",
    title: "Setting Powder - Translucent",
    description: "Sets makeup for all-day wear",
  },
  {
    imageSrc: "/img-18.jpg",
    title: "Lip Stain - Berry",
    description: "Long-lasting, vibrant color",
  },
  {
    imageSrc: "/img-19.jpg",
    title: "Face Mask - Detoxifying Clay",
    description: "Deep cleanses and purifies",
  },
  {
    imageSrc: "/img-20.jpg",
    title: "Sunscreen - SPF 50",
    description: "Lightweight, non-greasy",
  },
  {
    imageSrc: "/img-21.jpg",
    title: "BB Cream - Light Coverage",
    description: "Hydrates and evens skin tone",
  },
  {
    imageSrc: "/img-22.jpg",
    title: "Lip Scrub - Vanilla Sugar",
    description: "Exfoliates and softens lips",
  },
  {
    imageSrc: "/img-23.jpg",
    title: "Nail Polish - Classic Red",
    description: "Chip-resistant, glossy finish",
  },
  {
    imageSrc: "/img-24.jpg",
    title: "Face Oil - Rosehip",
    description: "Nourishes and rejuvenates skin",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200">
        <div className="container mx-auto relative z-10 py-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between px-5">
            <div className="flex-1 mb-8 md:mb-0">
              <h1 className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                jaw drop at the
                <span className="block mb-3 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                  PRICE DROP 😱
                </span>
              </h1>
              <div className="relative">
                <span className="absolute left-[55%] -top-40 rounded-full bg-green-400 px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-bold text-white">
                  CULT FAVES
                </span>
              </div>
            </div>
            <div className="relative flex-1 w-full md:w-auto">
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80"
                  alt="Featured products"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80"
                    alt="Model"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-20"></div>
      </section>
      {/* <section className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200">
        <div className="container mx-auto relative z-10 py-8 w-full">
          <div className="flex items-center justify-between px-5">
            <div className="flex-1">
              <h1 className="mb-2 text-4xl font-bold text-white md:text-6xl leading-6">
                jaw drop at the
                <span className="block mb-3 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                  PRICE DROP 😱
                </span>
              </h1>
              <div className="relative">
                <span className="absolute left-[55%] -top-40  rounded-full bg-green-400 px-6 py-2 text-sm font-bold text-white">
                  CULT FAVES
                </span>
              </div>
            </div>
            <div className="relative flex-1">
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80"
                  alt="Featured products"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80"
                    alt="Model"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-20"></div>
      </section> */}

      {/* Featured Products Grid */}
      <section className="py-6 px-2 lg:px-3 feature-products">
        <div className="mx-auto ">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute left-2 top-2 rotate-[-35deg] ">
                    <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-white">
                      {product.tag}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Promo Banner */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-400 py-4 px-2 sm:px-4 ">
        <div className="mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-white/10 px-4 py-3 sm:flex-row sm:px-6 sm:py-3">
            {/* Left Section */}
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <span className="text-lg font-bold text-white sm:text-xl">
                Extra 20% Off
              </span>
              <span className="text-sm text-white sm:text-base">
                On Your First App Purchase
              </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-green-400 px-3 py-1 text-sm font-bold text-white sm:px-4 sm:py-1 sm:text-base">
                USE CODE EXTRA20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}

      <section className="py-8 px-2 md:px-4">
        <div className="mx-auto">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Explore Our Top Brands
          </h2>
          <p className="mb-6 text-sm text-gray-600">A chance to obsess over</p>
          <div className="grid gap-4 md:grid-cols-3">
            {topBrands.slice(0, 12).map((brand) => (
              <Card key={brand.name} className="group overflow-hidden">
                <div className="relative aspect-[2/1]">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {brand.name}
                    </h3>
                    <p className="mb-2 text-sm text-white/90">
                      {brand.description}
                    </p>
                    <Button
                      variant="link"
                      className="h-8 px-0 text-pink-300 hover:text-pink-200"
                    >
                      {brand.action} →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Products */}
      <section className="py-8 px-2 sm:px-4 ">
        <div className="mx-auto">
          {/* Heading and Subheading */}
          <h2 className="mb-4 text-lg sm:text-xl font-semibold text-gray-800">
            Focus On:
          </h2>
          <p className="mb-6 text-xs sm:text-sm text-gray-600">
            Today's standout brands
          </p>
          {/* Grid for Focus Products */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {focusProducts.map((product) => (
              <Card
                key={product.title}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="mb-1 block text-xs sm:text-sm font-medium text-pink-300">
                      {product.subtitle}
                    </span>
                    <h3 className="mb-2 text-base sm:text-lg font-semibold text-white">
                      {product.title}
                    </h3>
                    <p className="mb-4 text-xs sm:text-sm text-white/90">
                      {product.description}
                    </p>
                    <Button
                      variant="secondary"
                      className="h-8 bg-white/20 text-white hover:bg-white/30 text-xs sm:text-sm"
                    >
                      Shop Now →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Brands */}
      <section className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Heading and Subheading */}
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-xl sm:text-2xl font-bold text-gray-800">
              GLOW LUXE
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              THE BEST OF LUXURY
            </p>
          </div>
          {/* Luxury Brands Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {luxuryBrands.map((brand) => (
              <div
                key={brand}
                className="text-sm sm:text-base md:text-lg font-medium text-gray-800 transition-colors hover:text-pink-600"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="border-t border-gray-200 py-8">
        <div className=" mx-auto px-2  md:px-4 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Card 1 */}
            <Card className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80"
                  alt="OLAPLEX"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    OLAPLEX
                  </h3>
                </div>
              </div>
            </Card>
            {/* Card 2 */}
            <Card className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80"
                  alt="FRAGRANCE"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    FRAGRANCE
                  </h3>
                </div>
              </div>
            </Card>
            {/* Card 3 */}
            <Card className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80"
                  alt="FOREST ESSENTIALS"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    FOREST ESSENTIALS
                  </h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gradient-to-r from-pink-100 via-pink-300 to-pink-500 py-8">
        <div className="mx-auto px-2 sm:px-2 md:px-4  flex flex-col items-center justify-center w-full ">
          <h2 className="mb-4 sm:mb-6 text-center text-xl font-semibold text-gray-800">
            New At GLOW
          </h2>
          <p className="mb-6 sm:mb-8 text-center text-sm text-gray-600">
            Latest Beauty Arrivals You'll Want To Own
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7 ">
            {products.slice(0, 14).map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer />
    </main>
  );
}

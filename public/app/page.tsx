import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
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
    image: "assets/img-1.jpg",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200">
        <div className="container mx-auto relative z-10 py-8 w-full">
          <div className="flex items-center justify-between px-10">
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
      </section>

      {/* Featured Products Grid */}
      <section className="py-6">
        <div className="container">
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
                  <div className="absolute left-2 top-2 rotate-[-30deg]">
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
      <section className="bg-gradient-to-r from-pink-500 to-pink-400 py-4">
        <div className="container">
          <div className="flex items-center justify-between rounded-lg bg-white/10 px-6 py-3">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-white">
                Extra 20% Off
              </span>
              <span className="text-sm text-white">
                On Your First App Purchase
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-green-400 px-4 py-1 text-sm font-bold text-white">
                USE CODE EXTRA20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="py-8">
        <div className="container">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Explore Our Top Brands
          </h2>
          <p className="mb-6 text-sm text-gray-600">A chance to obsess over</p>
          <div className="grid gap-4 md:grid-cols-3">
            {topBrands.map((brand) => (
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
      <section className="py-8">
        <div className="container">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Focus On:
          </h2>
          <p className="mb-6 text-sm text-gray-600">Today's standout brands</p>
          <div className="grid gap-4 md:grid-cols-3">
            {focusProducts.map((product) => (
              <Card key={product.title} className="group overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="mb-1 block text-sm font-medium text-pink-300">
                      {product.subtitle}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {product.title}
                    </h3>
                    <p className="mb-4 text-sm text-white/90">
                      {product.description}
                    </p>
                    <Button
                      variant="secondary"
                      className="h-8 bg-white/20 text-white hover:bg-white/30"
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
      <section className="border-t border-gray-200 py-8">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              NYKAA LUXE
            </h2>
            <p className="text-sm text-gray-600">THE BEST OF LUXURY</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {luxuryBrands.map((brand) => (
              <div
                key={brand}
                className="text-lg font-medium text-gray-800 transition-colors hover:text-pink-600"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="border-t border-gray-200 py-8">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80"
                  alt="OLAPLEX"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">OLAPLEX</h3>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80"
                  alt="FRAGRANCE"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">FRAGRANCE</h3>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80"
                  alt="FOREST ESSENTIALS"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">
                    FOREST ESSENTIALS
                  </h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gradient-to-r from-pink-100 via-white to-green-100 py-8">
        <div className="container">
          <h2 className="mb-6 text-center text-xl font-semibold">
            New At NYKAA
          </h2>
          <p className="mb-8 text-center text-sm text-gray-600">
            Latest Beauty Arrivals You'll Want To Own
          </p>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      1527443224154 + i
                    }-c4a3942d3acf?auto=format&fit=crop&q=80`}
                    alt={`New Arrival ${i + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-sm font-medium">New Product {i + 1}</h3>
                  <p className="text-xs text-pink-600">Shop Now</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

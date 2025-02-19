"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200">
      <div className=" w-full container mx-auto relative z-10 py-12">
        <div className="relative container mx-auto flex items-center justify-between">
          <div className=" items-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              jaw drop at the
              <span className="block bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                PRICE DROP 😱
              </span>
            </h1>
            <div className="relative">
              <span className="absolute -left-16 top-0 rotate-[-30deg] rounded-full bg-green-400 px-6 py-2 text-sm font-bold text-white">
                CULT FAVES
              </span>
            </div>
          </div>
          <div className="relative ">
            <div className="relative h-[500px]">
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
  );
}

import React from "react";
import Image from "next/image";
interface ProductCardProps {
  imageSrc: string; // imageSrc is a string (URL)
  title: string; // title is a string
  description: string; // description is a string
}
const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-pink-600">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

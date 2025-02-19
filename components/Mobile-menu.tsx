"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface MenuItem {
  title: string;
  href: string;
  items?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Makeup",
    href: "/makeup",
    items: [
      {
        title: "Face",
        href: "/makeup/face",
        items: [
          { title: "Foundation", href: "/makeup/face/foundation" },
          { title: "Concealer", href: "/makeup/face/concealer" },
          { title: "Powder", href: "/makeup/face/powder" },
        ],
      },
      {
        title: "Eyes",
        href: "/makeup/eyes",
        items: [
          { title: "Eyeshadow", href: "/makeup/eyes/eyeshadow" },
          { title: "Eyeliner", href: "/makeup/eyes/eyeliner" },
          { title: "Mascara", href: "/makeup/eyes/mascara" },
        ],
      },
      { title: "Lips", href: "/makeup/lips" },
    ],
  },
  {
    title: "Skincare",
    href: "/skincare",
    items: [
      { title: "Moisturizers", href: "/skincare/moisturizers" },
      { title: "Cleansers", href: "/skincare/cleansers" },
      { title: "Treatments", href: "/skincare/treatments" },
    ],
  },
  {
    title: "Hair",
    href: "/hair",
    items: [
      { title: "Shampoo", href: "/hair/shampoo" },
      { title: "Conditioner", href: "/hair/conditioner" },
      { title: "Styling", href: "/hair/styling" },
    ],
  },
  {
    title: "Fragrance",
    href: "/fragrance",
    items: [
      { title: "Perfumes", href: "/fragrance/perfumes" },
      { title: "Gift Sets", href: "/fragrance/gift-sets" },
      { title: "Luxury", href: "/fragrance/luxury" },
    ],
  },
  {
    title: "Bath & Body",
    href: "/bath-body",
    items: [
      { title: "Shower Gels", href: "/bath-body/shower-gels" },
      { title: "Lotions", href: "/bath-body/lotions" },
      { title: "Scrubs", href: "/bath-body/scrubs" },
    ],
  },
  {
    title: "Natural",
    href: "/natural",
    items: [
      { title: "Skincare", href: "/natural/skincare" },
      { title: "Makeup", href: "/natural/makeup" },
      { title: "Hair Care", href: "/natural/hair" },
    ],
  },
  {
    title: "Mom & Baby",
    href: "/mom-baby",
    items: [
      { title: "Baby Care", href: "/mom-baby/baby-care" },
      { title: "Maternity", href: "/mom-baby/maternity" },
      { title: "Nursing", href: "/mom-baby/nursing" },
    ],
  },
  {
    title: "Health & Wellness",
    href: "/health-wellness",
    items: [
      { title: "Supplements", href: "/health-wellness/supplements" },
      { title: "Personal Care", href: "/health-wellness/personal-care" },
      { title: "Fitness", href: "/health-wellness/fitness" },
    ],
  },
];

interface SubMenuProps {
  items: MenuItem[];
  level?: number;
}

function SubMenu({ items, level = 0 }: SubMenuProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <ul className={`space-y-1 ${level > 0 ? "ml-4" : ""}`}>
      {items.map((item) => (
        <li key={item.title}>
          {item.items ? (
            <div>
              <button
                onClick={() => toggleItem(item.title)}
                className="flex w-full items-center justify-between py-2 text-gray-600 hover:text-pink-600"
              >
                <span>{item.title}</span>
                <span className="text-xs">
                  {openItems[item.title] ? "−" : "+"}
                </span>
              </button>
              {openItems[item.title] && item.items && (
                <SubMenu items={item.items} level={level + 1} />
              )}
            </div>
          ) : (
            <Link
              href={item.href}
              className="block py-2 text-gray-600 hover:text-pink-600"
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-[90%] transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <div className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
        <SubMenu items={menuItems} />
      </div>
    </div>
  );
}

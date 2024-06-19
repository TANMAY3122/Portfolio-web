"use client";

import Title from "@/components/ui/title";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import StoreModal from "@/components/store-modal";

type Product = {
  id: number;
  title: string;
  url: string;
  price: string;
  description: string[];
  techStack: string[];
  demo: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Portfolio Template",
    url: "https://topmate.io/nikhilnigamnik/1003776",
    price: "2400",
    description: [
      "Built with Next.js 14 for optimal performance and flexibility.",
      "Uses TypeScript and MDX for robust development and dynamic content.",
      "Styled using TailwindCSS for a modern and responsive design.",
      "Utilizes shadcn/ui for enhanced user interface components.",
      "Comprises 5 fully customizable pages.",
      "Fully responsive design ensures compatibility across all devices.",
    ],
    demo: "https://www.nikks.tech/",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "TypeScript",
      "Vercel",
      "MDX",
    ],
  },
  {
    id: 2,
    title: "Digital Agency Template",
    url: "https://topmate.io/nikhilnigamnik/1003807",
    price: "3000",
    description: [
      "Built with Next.js 14 for optimal performance and flexibility.",
      "Styled using TailwindCSS for a modern and responsive design.",
      "Utilizes shadcn/ui for enhanced user interface components.",
      "Comprises 5 fully customizable pages.",
      "Fully responsive design ensures compatibility across all devices.",
    ],
    demo: "https://www.syncservice.tech/",
    techStack: ["Next.js", "TailwindCSS", "shadcn/ui", "Vercel"],
  },
];

const Page: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="flex gap-4 flex-col">
      <Title title="Store" />
      <div className="flex flex-col gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4"
          >
            <div>
              <h1 className="text-xl">{item.title}</h1>
              <button
                className="underline text-sm"
                onClick={() => openModal(item)}
              >
                View Details
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Button>
                <a href={item.demo} target="_blank" className="rounded-md">
                  Demo
                </a>
              </Button>
              <Button>
                <a href={item.url} target="_blank" className="rounded-md">
                  Buy Now
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <StoreModal isOpen={isModalOpen} onClose={closeModal}>
          <ul className="list-disc list-inside text-sm flex flex-col gap-2">
            {selectedProduct.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
          <div className="flex gap-2">
            {selectedProduct.techStack.map((tech, techIndex) => (
              <p key={techIndex} className="text-sm rounded-md underline">
                {tech}
              </p>
            ))}
          </div>
        </StoreModal>
      )}
    </section>
  );
};

export default Page;

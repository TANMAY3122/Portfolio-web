"use client";
import React, { useState } from "react";
import Title from "../ui/title";
import { items } from "@/lib/data";
import Link from "next/link";

// Define the categories available
const categories = ["Web", "App", "Data Science", "Project Management"];

// Type definition for the Tab props
interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void; // Explicitly define the type of setSelected
}

const Tab = ({ text, selected, setSelected }: TabProps) => (
  <button
    onClick={() => setSelected(text)}
    className={`${
      selected ? "text-white dark:text-black" : ""
    } relative rounded-md px-4 py-1 text-sm font-medium transition-colors`}
  >
    <span className="relative z-10">{text}</span>
    {selected && (
      <span className="absolute inset-0 z-0 rounded-full bg-neutral-950 dark:bg-neutral-50"></span>
    )}
  </button>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Web");

  // Filter the items based on the selected category
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="mt-14 flex flex-col gap-4">
      <Title title="Projects" />

      {/* Tabs for categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Tab
            key={category}
            text={category}
            selected={selectedCategory === category}
            setSelected={setSelectedCategory} // Pass the correct setter function
          />
        ))}
      </div>

      {/* Project items based on selected category */}
      <div className="flex flex-col gap-4 mt-4">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            className="flex flex-col gap-2 hover:underline"
            href={item.url}
            
            
          >
            <h3 className="text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;

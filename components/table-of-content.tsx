"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function TableOfContents({ headings }: { headings: any[] }) {
  const [show, setShow] = useState(false);

  const handleShowTable = () => {
    setShow(!show);
  };
  return (
    <div className="p-4 border rounded-xl flex flex-col gap-3 transition duration-500 ease-linear">
      <button
        className="flex justify-between items-center"
        onClick={handleShowTable}
      >
        <span className="text-lg font-bold">Table of Contents</span>
        {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {show && (
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.slug} className={` list-inside list-disc`}>
              <a href={`#${heading.slug}`} className=" hover:underline text-sm">
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

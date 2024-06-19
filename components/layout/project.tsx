import React from "react";
import Title from "../ui/title";
import { items } from "@/lib/data";

const Projects = () => {
  return (
    <section className="mt-14 flex flex-col gap-4">
      <Title title="Projects" />
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <a
            key={item.id}
            className="flex flex-col gap-2  hover:underline"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg ">{item.title}</h3>
            <p className=" text-sm text-gray-600 dark:text-neutral-400">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

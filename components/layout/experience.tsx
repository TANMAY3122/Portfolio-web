import React from "react";
import Title from "../ui/title";
import { experiences } from "@/lib/data";

const Experience = () => {
  return (
    <section className="mt-14 flex flex-col gap-4">
      <Title title="Experience" />

      {experiences.map((experience) => (
        <div key={experience.id} className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <p className="flex gap-x-1.5  text-sm">
              <span>{experience.role}</span>
              <span>•</span>
              <span>{experience.date}</span>
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              {experience.type}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              {experience.company}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;

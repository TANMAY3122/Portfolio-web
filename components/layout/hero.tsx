import Image from "next/image";
import React from "react";
import { socialLinks } from "@/lib/data";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src="/pfp2.jpg"
        className="rounded-full"
        height={100}
        width={100}
        alt="logo"
      />
      <div>
        <h1 className="text-xl">Hey, I'm Tanmay Kashyap 👋</h1>
        <span>Dynamic Project Manager | Mobile App & Full-Stack Developer | AI Solutionist</span>
      </div>
      <div className="flex  items-center gap-4">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
            {<link.icon />}
          </a>
        ))}
      </div>
      <hr />
      <p className="flex flex-col gap-4">
        <span>
        I'm a driven and creative technologist with a strong track record in challenging settings. My passion for technology and problem-solving led me to win a prestigious IQM Hackathon, showcasing my coding, design, and collaboration skills
        </span>
        <span>
        Passionate about leveraging this diverse skill set to spearhead transformative initiatives and drive organizational 
growth. Seeking a dynamic role that allows me to integrate my strategic vision, technical prowess, and leadership 
capabilities to lead cross-functional teams, deliver innovative mobile applications, architect scalable software 
solutions, and harness the potential of AI technologies to solve complex challenges and propel the organization 
forward.
        </span>
      </p>
    </div>
  );
};

export default Hero;

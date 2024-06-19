import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const tabs = [
  {
    title: "Profile",
    link: "/",
  },
  {
    title: "Blog",
    link: "/blog",
  },

  {
    title: "Contact",
    link: "/contact",
  },
  // {
  //   title: "Store",
  //   link: "/store"
  // }
];

export const experiences = [
  {
    id: 1,
    date: "2024 - Present",
    role: "Project Manager",
    type: "Internship - India (Remote)",
    company: "GID Interactive LLP",
  },
  {
    id: 2,
    date: "2024 - Present",
    role: "Full Stack Developer",
    type: "Internship - India (Remote)",
    company: "GID Interactive LLP",
  },
  {
    id: 3,
    date: "January 2024",
    role: "Software Engineer",
    type: "Virtual Internship",
    company: "JPMorgan Chase & Co.",
  },
  
];

export const socialLinks = [
  {
    id: 1,
    icon: GitHubLogoIcon,
    name: "GitHub",
    url: "https://github.com/TANMAY3122",
  },
  {
    id: 2,
    icon: TwitterLogoIcon,
    name: "Twitter",
    url: "https://x.com/TANMAYK73082364",
  },
  {
    id: 3,
    icon: LinkedInLogoIcon,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tanmay-kashyap/",
  },
];

export const items = [
  {
    id: 1,
    title: "Convos",
    description:
      "A real time messaging , cross platform aesthetic app build using Flutter & Firebase",
    url: "https://github.com/TANMAY3122/Convo_App",
  },
  {
    id: 2,
    title: "GetIntoDare",
    description:
      "An event aggregator and management SaaS website for Colleges and Universities build using MERN stack.",
    url: "https://www.getintodare.com/",
  },
];

export const skills = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "ReactNative",
      "Flutter",
      "TypeScript",
    ],
  },
  {
    title: "Backend",
    skills: [
      "NodeJS",
      "Express",
      "MongoDB",
      "Firebase",
      "RESTful APIs",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    skills: ["Jira","Chatgpt","Confluence","Google Workspace","VS Code", "Figma", "Slack", "Github", "Power Bi"],
  },
 
];

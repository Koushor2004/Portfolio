

export const personal = {
  name: "Your Name",
  tagline: "Full Stack Developer",
  bio: "A passionate software engineer who builds innovative, scalable solutions. I craft clean code and pixel-perfect UIs that solve real problems.",
  location: "Siliguri, West Bengal, India",
  email: "you@example.com",
  // Place your photo as /public/avatar.jpg  (or update path below)
  avatar: "/avatar.jpg",
  resumeLink: "/resume.pdf", // Place resume.pdf in /public/
  social: {
    github: "https://github.com/yourhandle",
    twitter: "https://twitter.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    instagram: "https://instagram.com/yourhandle",
  },
};

export const skills = [
  // Add/remove skill objects as needed
  { name: "React", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "HTML / CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 82, category: "Backend" },
  { name: "Express", level: 78, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Backend" },
  { name: "MongoDB", level: 72, category: "Database" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Figma", level: 68, category: "Design" },
];

export const projects = [
  {
    year: "2024",
    title: "Web Simulation of UbuntuOS",
    description:
      "A virtual simulation of Ubuntu 20.04 operating system running entirely in the browser.",
    stars: 4305,
    tags: ["Next.js", "JavaScript", "TailwindCSS", "Vercel"],
    repoLink: "https://github.com/yourhandle/project",
    demoLink: "https://demo.example.com",
  },
  {
    year: "2023",
    title: "Economist Unlocked",
    description:
      "A Chrome extension to read paid articles for free with no ads, no subscription, no memberships.",
    stars: 139,
    tags: ["JavaScript", "Chrome Extensions"],
    repoLink: "https://github.com/yourhandle/project2",
    demoLink: null,
  },
  {
    year: "2024",
    title: "VSCode CSS Compatibility",
    description:
      "A VS Code extension to check which CSS syntaxes are compatible or supported across all browsers.",
    stars: 55,
    tags: ["TypeScript", "VS Code Extension", "JavaScript"],
    repoLink: "https://github.com/yourhandle/project3",
    demoLink: "https://demo2.example.com",
  },
  {
    year: "2022",
    title: "AI Chat Interface",
    description:
      "A full-featured real-time chat app with AI-powered suggestions and multi-room support.",
    stars: 210,
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    repoLink: "https://github.com/yourhandle/project4",
    demoLink: "https://demo3.example.com",
  },
];

export const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "Jan 2023 – Present",
    location: "Remote",
    description:
      "Led the redesign of the core product dashboard, improving user retention by 32%. Mentored junior developers and established component library standards.",
    tags: ["React", "TypeScript", "Storybook"],
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "Jun 2021 – Dec 2022",
    location: "Kolkata, India",
    description:
      "Built and maintained RESTful APIs serving 100k+ users. Designed and implemented the company's CI/CD pipeline from scratch.",
    tags: ["Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    role: "Frontend Intern",
    company: "DesignStudio",
    period: "Jan 2021 – May 2021",
    location: "Remote",
    description:
      "Developed pixel-perfect UI components based on Figma designs. Collaborated directly with designers and improved page load time by 40%.",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
  },
];

import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Bartlomiej Cisek | Software Developer",
    description:
      "Backend-focused software developer portfolio, emphasizing application architecture and clean, readable UI.",
  },
  about: {
    title: "About Me",
    heading: "Hey, I'm",
    name: "Bartłomiej",
    wave: "👋",
    subheading: "Software Developer",
    description:
      "Software Developer with over 3 years of experience in building web applications. I mainly work with PHP and the backend ecosystem, focusing on clean code, good practices, and stable solutions. I enjoy developing my skills, learning new technologies, and taking on challenges that help me build better applications.",
    availability: "Available for projects",
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "PHP Developer",
        company: "Innovation Software, Wrocław",
        period: "2025-03 - 2026-01",
      },
      {
        role: "PHP Developer",
        company: "ModulesGarden, Rzeszów",
        period: "2022-11 - 2025-03",
      },
      {
        role: "Student Internship - PHP Developer",
        company: "Ideo Sp. z o.o, Rzeszów",
        period: "2022-05 - 2022-07",
      },
    ],
  },
  skills: {
    title: "Tech Stack",
    tooltipLabel: "Show skill level legend",
    tooltipTitle: "Skill levels",
    groups: {
      practical: {
        label: "Practical",
        description:
          "I use these technologies confidently and independently in real work.",
      },
      basic: {
        label: "Basic",
        description:
          "I know them at a usable level and can apply them in typical tasks.",
      },
      learning: {
        label: "Learning",
        description:
          "I am actively developing this area and building deeper fluency.",
      },
    },
    items: [
      { name: "PHP", level: "practical" },
      { name: "Symfony", level: "practical" },
      { name: "Laravel", level: "practical" },
      { name: "HTML", level: "practical" },
      { name: "CSS", level: "practical" },
      { name: "SQL", level: "practical" },
      { name: "JavaScript", level: "practical" },
      { name: "Vue 3", level: "practical" },
      { name: "Nuxt 4", level: "practical" },
      { name: "React", level: "basic" },
      { name: "Docker", level: "practical" },
      { name: "Node.js", level: "basic" },
      { name: "Git", level: "practical" },
      { name: "REST API", level: "practical" },
      { name: "CQRS", level: "basic" },
      { name: "Linux", level: "basic" },
      { name: "TypeScript", level: "basic" },
      { name: "Go", level: "learning" },
      { name: "RabbitMQ", level: "basic" },
      { name: "Redis", level: "basic" },
    ],
  },
  education: {
    title: "Education",
    degree: "Bachelor's degree",
    university: "University of Rzeszów",
    summary: "Computer Science and Econometrics",
  },

  projects: {
    projectLabel: "Project #{number}",
    selectedCaseStudy: "Selected case study",
    ariaLabel: "View project {number}",
    items: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-scale e-commerce solution built with Next.js, Stripe, and a custom CMS. It features ultra-fast search and real-time inventory.",
        tags: ["Next.js", "Stripe", "Tailwind"],
      },
      {
        title: "Task Management App",
        description:
          "A collaborative project management tool with real-time updates via WebSockets, kanban boards, and detailed analytics.",
        tags: ["React", "Node.js", "Socket.io"],
      },
      {
        title: "AI Image Generator",
        description:
          "A web interface for generating images with AI models. It integrates HuggingFace APIs and lets users save and share prompts.",
        tags: ["Python", "React", "AI"],
      },
    ],
  },
  contact: {
    cardTitle: "Get in touch",
    cardDescription: "Open contact form",
    cardButton: "Message Me",
    modalTitle: "Say Hello",
    closeLabel: "Close contact modal",
    successTitle: "Message Sent!",
    successDescription: "I'll get back to you as soon as possible.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    messagePlaceholder: "Your Message",
    submitLabel: "Send Message",
  },
};

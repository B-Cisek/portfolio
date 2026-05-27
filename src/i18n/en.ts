import type { Dictionary } from "./types";
import { sharedSkillItems } from "./skills";

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
    items: sharedSkillItems,
  },
  education: {
    title: "Education",
    degree: "Bachelor's degree",
    university: "University of Rzeszów",
    summary: "Computer Science and Econometrics",
  },

  projects: {
    projectLabel: "Project #{number}",
    ariaLabel: "View project {number}",
    githubLabel: "GitHub",
    demoLabel: "Demo",
    items: [
      {
        title: "Cinema Booking App",
        description:
          "A cinema seat booking app that lets users browse the movie schedule, select a screening, and purchase tickets through an intuitive interface.",
        tags: ["Laravel", "React", "Inertia.js", "Redis", "PostgreSQL"],
        githubLink: "https://github.com/B-Cisek/cinema-booking-app",
        demoLink: "https://cinema.bartlomiejcisek.pl",
      },
      {
        title: "Gym Management SaaS (Backend)",
        description:
          "Gym Management SaaS is a multi-tenant system for gym networks, enabling management of clients, memberships, class schedules, and check-ins.",
        tags: ["Symfony", "PostgreSQL", "Redis"],
        githubLink: "https://github.com/B-Cisek/gym-backend",
        demoLink: null,
      },
      {
        title: "Gym Management SaaS (Frontend)",
        description:
          "Gym Management SaaS is a multi-tenant system for gym networks, enabling management of clients, memberships, class schedules, and check-ins.",
        tags: ["Nuxt", "TypeScript", "Pinia", "Tailwind CSS"],
        githubLink: "https://github.com/B-Cisek/gym-frontend",
        demoLink: null,
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

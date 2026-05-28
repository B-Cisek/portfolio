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
    major: "Computer Science and Econometrics",
    period: "2019 - 2023",
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
    modalTitle: "Contact",
    modalDescription:
      "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
    formTitle: "Form",
    formDescription:
      "Share a few details and I'll get back to you as soon as I can.",
    detailsTitle: "Contact details",
    detailsDescription:
      "If you prefer, you can also reach out directly by email or on LinkedIn.",
    directEmailLabel: "Email",
    directEmailButton: "Reveal address",
    linkedinLabel: "LinkedIn",
    linkedinCta: "Open profile",
    closeLabel: "Close contact modal",
    successTitle: "Message Sent!",
    successDescription: "I'll get back to you as soon as possible.",
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email",
    emailPlaceholder: "Email Address",
    messageLabel: "Message",
    messagePlaceholder: "Your Message",
    submitLabel: "Send",
    submitPendingLabel: "Sending...",
    errorTitle: "Message could not be sent",
    errorDescription: "Try again in a moment or contact me directly by email.",
    validationError: "Please fill out all form fields correctly.",
    turnstileError: "Complete the verification before submitting the form.",
    nameRequiredError: "Enter your name.",
    nameInvalidError: "Name must be between 2 and 50 characters.",
    emailRequiredError: "Enter your email address.",
    emailInvalidError: "Enter a valid email address.",
    messageRequiredError: "Enter your message.",
    messageInvalidError: "Message must be between 10 and 5000 characters.",
  },
};

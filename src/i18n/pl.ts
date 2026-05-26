import type { Dictionary } from "./types";

export const pl: Dictionary = {
  meta: {
    title: "Bartlomiej Cisek | Software Developer",
    description:
      "Portfolio software developera skupionego na backendzie, architekturze aplikacji i czytelnym UI.",
  },
  about: {
    title: "O mnie",
    heading: "Cześć, jestem",
    name: "Bartłomiej",
    wave: "👋",
    subheading: "Software Developer",
    description:
      "Software Developer z ponad 3-letnim doświadczeniem w tworzeniu aplikacji webowych. Na co dzień pracuję głównie z PHP i ekosystemem backendowym, dbając o czytelny kod, dobre praktyki oraz stabilne rozwiązania. Chętnie rozwijam swoje umiejętności, poznaję nowe technologie i podejmuję wyzwania, które pozwalają mi tworzyć coraz lepsze aplikacje.",
    availability: "Dostępny do współpracy",
  },
  experience: {
    title: "Doświadczenie",
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
        role: "Praktyka studencka - PHP Developer",
        company: "Ideo Sp. z o.o, Rzeszów",
        period: "2022-05 - 2022-07",
      },
    ],
  },
  skills: {
    title: "Umiejętności",
    tooltipLabel: "Pokaż legendę poziomów",
    tooltipTitle: "Poziomy umiejętności",
    groups: {
      practical: {
        label: "Praktyczny",
        description:
          "Korzystam z tych technologii pewnie i samodzielnie w realnej pracy.",
      },
      basic: {
        label: "Podstawowy",
        description:
          "Znam je na poziomie użytkowym i potrafię wykorzystywać w typowych zadaniach.",
      },
      learning: {
        label: "Uczę się",
        description:
          "Jestem w trakcie rozwijania tej technologii i budowania większej swobody.",
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
    title: "Edukacja",
    degree: "Inż",
    university: "Uniwersytet Rzeszowski",
    summary: "Informatyka i Ekonometria",
  },
  projects: {
    projectLabel: "Projekt #{number}",
    selectedCaseStudy: "Wybrane case study",
    ariaLabel: "Pokaż projekt {number}",
    items: [
      {
        title: "Platforma e-commerce",
        description:
          "Rozbudowane rozwiązanie e-commerce zbudowane w Next.js, Stripe i własnym CMS-em. Zawiera ultraszybkie wyszukiwanie oraz stany magazynowe w czasie rzeczywistym.",
        tags: ["Next.js", "Stripe", "Tailwind"],
      },
      {
        title: "Aplikacja do zarządzania zadaniami",
        description:
          "Narzędzie do współpracy projektowej z aktualizacjami w czasie rzeczywistym przez WebSockety, tablicami kanban i szczegółową analityką.",
        tags: ["React", "Node.js", "Socket.io"],
      },
      {
        title: "Generator obrazów AI",
        description:
          "Interfejs webowy do generowania obrazów przy użyciu modeli AI. Integruje API HuggingFace i pozwala zapisywać oraz udostępniać prompty.",
        tags: ["Python", "React", "AI"],
      },
    ],
  },
  contact: {
    cardTitle: "Skontaktuj się",
    cardDescription: "Otwórz formularz kontaktowy",
    cardButton: "Napisz do mnie",
    modalTitle: "Napisz wiadomość",
    closeLabel: "Zamknij formularz kontaktowy",
    successTitle: "Wiadomość wysłana!",
    successDescription: "Odezwę się do Ciebie tak szybko, jak to możliwe.",
    namePlaceholder: "Twoje imię",
    emailPlaceholder: "Adres e-mail",
    messagePlaceholder: "Twoja wiadomość",
    submitLabel: "Wyślij wiadomość",
  },
};

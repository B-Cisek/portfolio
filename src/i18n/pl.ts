import type { Dictionary } from "./types";
import { sharedSkillItems } from "./skills";

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
    items: sharedSkillItems,
  },
  education: {
    title: "Edukacja",
    degree: "Inż",
    university: "Uniwersytet Rzeszowski",
    summary: "Informatyka i Ekonometria",
  },
  projects: {
    projectLabel: "Projekt #{number}",
    ariaLabel: "Pokaż projekt {number}",
    githubLabel: "GitHub",
    demoLabel: "Demo",
    items: [
      {
        title: "Cinema Booking App",
        description:
          "Aplikacja do rezerwacji miejsc w kinie, umożliwiająca przeglądanie repertuaru, wybór seansu i zakup biletów przez intuicyjny interfejs.",
        tags: ["Laravel", "React", "Inertia.js", "Redis", "PostgreSQL"],
        githubLink: "https://github.com/B-Cisek/cinema-booking-app",
        demoLink: "https://cinema.bartlomiejcisek.pl",
      },
      {
        title: "Gym Management SaaS (Backend)",
        description:
          "Gym Management SaaS to multi-tenant system dla sieci siłowni, pozwalający na zarządzanie klientami, karnetami, grafikiem zajęć oraz check-inami.",
        tags: ["Symfony", "PostgreSQL", "Redis"],
        githubLink: "https://github.com/B-Cisek/gym-backend",
        demoLink: null,
      },
      {
        title: "Gym Management SaaS (Frontend)",
        description:
          "Gym Management SaaS to multi-tenant system dla sieci siłowni, pozwalający na zarządzanie klientami, karnetami, grafikiem zajęć oraz check-inami.",
        tags: ["Nuxt", "TypeScript", "Pinia", "Tailwind CSS"],
        githubLink: "https://github.com/B-Cisek/gym-frontend",
        demoLink: null,
      },
    ],
  },
  contact: {
    cardTitle: "Skontaktuj się",
    cardDescription: "Otwórz formularz kontaktowy",
    cardButton: "Napisz do mnie",
    modalTitle: "Kontakt",
    modalDescription:
      "Masz pytanie lub chcesz wspolpracowac?\nWypelnij ponizszy formularz, a ja skontaktuje sie z Toba tak szybko, jak to mozliwe.",
    formTitle: "Formularz",
    formDescription: "Napisz kilka konkretów, a odezwę się możliwie szybko.",
    detailsTitle: "Dane kontaktowe",
    detailsDescription:
      "Jeśli wolisz, możesz skontaktować się też bezpośrednio przez e-mail albo LinkedIn.",
    directEmailLabel: "E-mail",
    directEmailButton: "Pokaż adres",
    linkedinLabel: "LinkedIn",
    linkedinCta: "Otwórz profil",
    closeLabel: "Zamknij formularz kontaktowy",
    successTitle: "Wiadomość wysłana!",
    successDescription: "Odezwę się do Ciebie tak szybko, jak to możliwe.",
    nameLabel: "Nazwa",
    namePlaceholder: "Twoje imię",
    emailLabel: "Email",
    emailPlaceholder: "Adres e-mail",
    messageLabel: "Wiadomość",
    messagePlaceholder: "Twoja wiadomość",
    submitLabel: "Wyślij",
    submitPendingLabel: "Wysyłanie...",
    errorTitle: "Nie udało się wysłać wiadomości",
    errorDescription:
      "Spróbuj ponownie za chwilę albo napisz bezpośrednio mailem.",
    validationError: "Uzupełnij poprawnie wszystkie pola formularza.",
    turnstileError: "Potwierdź weryfikację, zanim wyślesz formularz.",
    nameRequiredError: "Podaj imię lub nazwę.",
    nameInvalidError: "Nazwa musi mieć od 2 do 50 znaków.",
    emailRequiredError: "Podaj adres e-mail.",
    emailInvalidError: "Podaj poprawny adres e-mail.",
    messageRequiredError: "Wpisz wiadomość.",
    messageInvalidError: "Wiadomość musi mieć od 10 do 5000 znaków.",
  },
};

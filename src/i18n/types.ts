export type Lang = "pl" | "en";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}

export type SkillGroup = "practical" | "basic" | "learning";

export interface SkillItem {
  name: string;
  level: SkillGroup;
}

export interface SkillGroupDefinition {
  label: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string | null;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    heading: string;
    name: string;
    wave: string;
    subheading: string;
    description: string;
    availability: string;
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    tooltipLabel: string;
    tooltipTitle: string;
    groups: Record<SkillGroup, SkillGroupDefinition>;
    items: SkillItem[];
  };
  education: {
    title: string;
    degree: string;
    university: string;
    summary: string;
  };
  projects: {
    projectLabel: string;
    ariaLabel: string;
    githubLabel: string;
    demoLabel: string;
    items: ProjectItem[];
  };
  contact: {
    cardTitle: string;
    cardDescription: string;
    cardButton: string;
    modalTitle: string;
    closeLabel: string;
    successTitle: string;
    successDescription: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
}

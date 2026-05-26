import { en } from "./en";
import { pl } from "./pl";
import type { Dictionary, Lang } from "./types";

export type { Dictionary, Lang, SkillGroup } from "./types";

export const dictionaries = { pl, en };

const supportedLanguages: Lang[] = ["pl", "en"];

export function isLang(value: string): value is Lang {
  return supportedLanguages.includes(value as Lang);
}

export function getLangFromHeader(header: string | null): Lang {
  if (!header) {
    return "en";
  }

  for (const part of header.split(",")) {
    const locale = part.trim().split(";")[0];
    const lang = locale.split("-")[0]?.toLowerCase();

    if (lang && isLang(lang)) {
      return lang;
    }
  }

  return "en";
}

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

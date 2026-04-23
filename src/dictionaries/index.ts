import { en } from './en';
import { fr } from './fr';

const dictionaries = {
  en,
  fr,
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof fr; // Use fr as the base type since they should be identical

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale] || dictionaries.fr;
};

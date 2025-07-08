import { en, TranslationKeys } from './en';
import { fr } from './fr';

export type Language = 'en' | 'fr';

export const translations: Record<Language, TranslationKeys> = {
  en,
  fr
};

export const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' }
];

export { TranslationKeys } from './en';

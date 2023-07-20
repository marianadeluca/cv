import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import tEnglish from '../locales/en/translation.json';
import tPortuguese from '../locales/pt/translation.json';


// export const defaultNS = 'ns1';
// export const fallbackNS = 'fallback';

// i18next.init({
//   debug: true,
//   fallbackLng: 'en',
//   defaultNS,
//   fallbackNS,
//   resources: {
//     en: {
//       ns1: enNs1,
//     },
//     ptNs1: {
//       ns1: ptNs1,
//     },
//   },
// });

// export default i18next;

const resources = {
  en: {
    translation: tEnglish,
  },
  pt: {
    translation: tPortuguese
  }
}

i18next
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next).init({resources,});

export default i18next;
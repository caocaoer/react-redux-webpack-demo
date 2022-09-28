import i18next from 'i18next';
import da from '@/i18n/da.json';
import en from '@/i18n/en.json';

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources: {
    en: {
      translation: en,
    },
    da: {
      translation: da,
    },
  },
});

export default i18next;

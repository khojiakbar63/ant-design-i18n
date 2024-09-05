import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from "./uz/uz.json";
import ru from "./ru/ru.json";
import en from "./en/en.json";

const resources = {
  en: {
    translation: en,
  },
  uz: {
    translation: uz,
  },
  ru: {
    translation: ru,
  },
 
};

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: true,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

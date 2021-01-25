import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PtTranslation from "./translations/pt-br.json";
import EnTranslation from "./translations/en.json";

const resources = {
  en: {
    translation: PtTranslation,
  },
  pt: {
    translation: EnTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          menuItems: "Menu items",
          faqs: "Frequently Asked Questions",
          promos: "Promotions",
          jobs: "Jobs",
          nearBy: "Nearby Locations",
          startOrder: "START YOUR ORDER",
        },
      },
      es: {
        translation: {
          menuItems: "Elementos de menú",
          faqs: "Preguntas frecuentes",
          promos: "Promociones",
          jobs: "Trabajos",
          nearBy: "Ubicaciones cercanas",
          startOrder: "EMPIEZA TU PEDIDO",
        },
      },
    },
  });

export default i18n;

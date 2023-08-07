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
          orderNow: "Order Now",
          getDirections: "Get Directions",
          viweMenu: "View our menu",
          visitUs: "Visit us",
          hours: "Hours",
          viewFullMenu: "View full menu",
          browseMenu: "Browse our menu",
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
          orderNow: "Ordenar ahora",
          getDirections: "Obtener las direcciones",
          viweMenu: "ver nuestro menú",
          visitUs: "Visítanos",
          hours: "Horas",
          viewFullMenu: "Ver menú completo",
          browseMenu: "Navega por nuestro menú",
        },
      },
    },
  });

export default i18n;

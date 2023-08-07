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
          dirTitle: "Dominos Locations Directory",
          locInUS: "Locations in US",
          bannerText:
            "Domino's, a global pizza chain, offers a diverse menu with quality ingredients and customizable options. Known for fast delivery and convenient online ordering, enjoy delicious pizzas and sides at their locations worldwide.",
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
          dirTitle: "Dominos Directorio De Ubicaciones",
          locInUS: "tiendas en US",
          bannerText:
            "Domino's, una cadena mundial de pizzerías, ofrece un menú diverso con ingredientes de calidad y opciones personalizables. Conocido por su entrega rápida y pedidos en línea convenientes, disfrute de deliciosas pizzas y guarniciones en sus ubicaciones en todo el mundo.",
        },
      },
    },
  });

export default i18n;

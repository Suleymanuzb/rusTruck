import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./data/translations/ru";
import en from "./data/translations/en";
import uz from "./data/translations/uz";

i18n.use(initReactI18next).init({
    resources: {
        ru: {
            translation: ru,
        },
        en: {
            translation: en,
        },
        uz: {
            translation: uz,
        },
    },

    lng: "ru",
    fallbackLng: "ru",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

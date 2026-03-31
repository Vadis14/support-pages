import i18n from 'i18next';
import ruTranslation from './locales/ru/translation.json';
import enTranslation from './locales/en/translation.json';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    resources: {
        ru: {
            translation: ruTranslation
        },
        en: {
            translation: enTranslation
        }
    }
});
export default i18n;
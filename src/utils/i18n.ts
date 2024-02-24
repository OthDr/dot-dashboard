import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../locales/en.json';
import frTranslation from '../locales/fr.json';
import arTranslation from '../locales/ar.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            fr: {
                translation: frTranslation,
            },
            ar: {
                translation: arTranslation,
            },
        },
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
    });
// console.log(i18n.isInitialized); // should output "true"
// console.log(i18n.language); // should output the detected language, or "en" if none was detected
// console.log(i18n.t('transaction_modal.Details')); // should output the translated text

export default i18n;

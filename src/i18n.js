import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';

i18n
.use(Backend)
.use(initReactI18next)
.init({
    lng: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }, 
    backend: {
    	loadPath: '/static/locales/{{lng}}/{{ns}}.json'
    }
});
export default i18n;

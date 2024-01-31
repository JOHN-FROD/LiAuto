import {initReactI18next} from "react-i18next";
import detector from 'i18next-browser-languagedetector'
import i18next from "i18next";
import ru from './ru.json'
import uz from './uz.json'


i18next
    .use(initReactI18next)
    .use(detector)
    .init({
    fallbackLng: 'ru',
    // supportedLngs:  ['ru', 'uz'],
    interpolation: {escapeValue: false},
    resources: {ru, uz },
    detector:{order:['cookie','localstorage'],caches:['cookie']}
})
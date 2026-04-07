import { createI18n } from 'vue-i18n'
import en from './messages/en'
import fr from './messages/fr'

const defaultLocale = 'fr'
const savedLocale = localStorage.getItem('portfolio-locale')
const locale = savedLocale === 'en' || savedLocale === 'fr' ? savedLocale : defaultLocale

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
  },
})

import { ref } from 'vue'

const saved = typeof window !== 'undefined' ? localStorage.getItem('locale') : null
const locale = ref(saved || 'en')

const messages = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    images: 'Images',
    videos: 'Videos',
    destination: 'Destination',
    contact: 'Contact'
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    gallery: 'Galerie',
    images: 'Images',
    videos: 'Vidéos',
    destination: 'Destination',
    contact: 'Contact'
  },
  rw: {
    home: 'Ahabanza',
    about: 'Ibyerekeye',
    services: 'Serivisi',
    gallery: 'Galeri',
    images: 'Amafoto',
    videos: 'Amashusho',
    destination: 'Ahantu',
    contact: 'Twandikire'
  }
}

function setLocale(l) {
  if (!messages[l]) return
  locale.value = l
  if (typeof window !== 'undefined') localStorage.setItem('locale', l)
}

function t(key) {
  const map = messages[locale.value] || messages.en
  return map[key] ?? key
}

export { locale, setLocale, t }

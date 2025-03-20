import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      header: {
        support: 'Support',
        download: 'Download',
        signupLogin: 'Signup/Login',
        language: 'Language',
      },
      hero: {
        title: 'Graal Online',
        description: 'Discover a Universe of Multiplayer Adventures!',
        discoverButton: 'Discover Graal Online',
        scrollDown: 'Scroll Down to Explore', 
      },
      discover: {
        title: 'Discover Graal Online',
        games: {
          graalZone: {
            title: 'Graal Zone',
            description: 'A futuristic 2D combat game',
          },
          graalonlineClassic: {
            title: 'Graalonline Classic',
            description: 'Explore worlds, chat with friends!',
          },
          graalOlwest: {
            title: 'Graal Olwest',
            description: 'Experience the Wild West',
          },
          graalEra: {
            title: 'Graal Era',
            description: 'The next generation of Graal',
          },
        },
        platforms: {
          steam: 'Steam',
          web: 'Web',
          ios: 'iOS',
          android: 'Android',
        },
      },
      news: {
        title: 'Graalonline News',
        era: 'Era',
        classic: 'Classic',
        zone: 'Zone',
        olwest: "Ol'West",
        readMore: 'Read More',
        loading: 'Loading posts...',
        error: 'Failed to load some posts. Please try again later.',
        noPosts: 'No posts available at the moment.',
        selectFeed: "Please select a feed to view news."
      },
      footer: {
        support: 'Support',
        licence: 'Licence',
        rules: 'Rules',
        toonslab: 'Toonslab',
        copyright: '© 2025 Graal Online. All rights reserved.',
      },
    },
  },
  es: {
    translation: {
      header: {
        support: 'Soporte',
        download: 'Descargar',
        signupLogin: 'Registrarse/Iniciar Sesión',
        language: 'Idioma',
      },
      hero: {
        title: 'Graal Online',
        description: '¡Descubre un Universo de Aventuras Multijugador!',
        discoverButton: 'Descubre Graal Online',
        scrollDown: 'Desplázate hacia abajo para explorar',
      },
      discover: {
        title: 'Descubre Graal Online',
        games: {
          graalZone: {
            title: 'Graal Zone',
            description: 'Un juego de combate 2D futurista',
          },
          graalonlineClassic: {
            title: 'Graalonline Classic',
            description: '¡Explora mundos, chatea con amigos!',
          },
          graalOlwest: {
            title: 'Graal Olwest',
            description: 'Vive el Salvaje Oeste',
          },
          graalEra: {
            title: 'Graal Era',
            description: 'La próxima generación de Graal',
          },
        },
        platforms: {
          steam: 'Steam',
          web: 'Web',
          ios: 'iOS',
          android: 'Android',
        },
      },
      news: {
        title: 'Noticias de Graalonline',
        era: 'Era',
        classic: 'Clásico',
        zone: 'Zona',
        olwest: 'Viejo Oeste',
        readMore: 'Leer Más',
        loading: 'Cargando publicaciones...',
        error: 'No se pudieron cargar algunas publicaciones. Por favor, intenta de nuevo más tarde.',
        noPosts: 'No hay publicaciones disponibles en este momento.',
      },
      footer: {
        support: 'Soporte',
        licence: 'Licencia',
        rules: 'Reglas',
        toonslab: 'Toonslab',
        copyright: '© 2025 Graal Online. Todos los derechos reservados.',
      },
    },
  },
  fr: {
    translation: {
      header: {
        support: 'Support',
        download: 'Télécharger',
        signupLogin: "S'inscrire/Se connecter",
        language: 'Langue',
      },
      hero: {
        title: 'Graal Online',
        description: 'Découvrez un Univers d’Aventures Multijoueurs !',
        discoverButton: 'Découvrir Graal Online',
        scrollDown: 'Faites défiler vers le bas pour explorer',
      },
      discover: {
        title: 'Découvrez Graal Online',
        games: {
          graalZone: {
            title: 'Graal Zone',
            description: 'Un jeu de combat 2D futuriste',
          },
          graalonlineClassic: {
            title: 'Graalonline Classic',
            description: 'Explorez des mondes, discutez avec des amis !',
          },
          graalOlwest: {
            title: 'Graal Olwest',
            description: 'Vivez l’expérience du Far West',
          },
          graalEra: {
            title: 'Graal Era',
            description: 'La prochaine génération de Graal',
          },
        },
        platforms: {
          steam: 'Steam',
          web: 'Web',
          ios: 'iOS',
          android: 'Android',
        },
      },
      news: {
        title: 'Actualités Graalonline',
        era: 'Ère',
        classic: 'Classique',
        zone: 'Zone',
        olwest: 'Vieux Ouest',
        readMore: 'Lire Plus',
        loading: 'Chargement des publications...',
        error: 'Échec du chargement de certaines publications. Veuillez réessayer plus tard.',
        noPosts: 'Aucune publication disponible pour le moment.',
      },
      footer: {
        support: 'Support',
        licence: 'Licence',
        rules: 'Règles',
        toonslab: 'Toonslab',
        copyright: '© 2025 Graal Online. Tous droits réservés.',
      },
    },
  },
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
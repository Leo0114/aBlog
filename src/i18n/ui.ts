import MxFlag from "@assets/icons/flags/Mx.astro";
import UsFlag from "@assets/icons/flags/Us.astro";

export const languages: Record<
  string,
  { code: string; name: string; flag: typeof MxFlag | typeof UsFlag }
> = {
  es: { code: "es", name: "Español", flag: MxFlag },
  en: { code: "en", name: "English", flag: UsFlag },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.index": "Inicio",
    "nav.articles": "Blog",
    "nav.about": "Acerca de",
    "nav.gallery": "Galería",
  },
  en: {
    "nav.index": "Home",
    "nav.articles": "Blog",
    "nav.about": "About",
    "nav.gallery": "Gallery",
  },
} as const;

export const routes = {
  en: {
    index: "home",
    about: "about",
    gallery: "gallery",
    articles: "articles",
  },
  es: {
    index: "home",
    about: "about",
    gallery: "gallery",
    articles: "articles",
  },
};

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ieva & Tolga",
  description: "We are getting married",
  srcDir: "src",
  appearance: false,
  cleanUrls: true,
  base: "/wedding/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Travelling", link: "/travel" },
      { text: "The Location!", link: "/location" },
      { text: "The Day!", link: "/info" },
      { text: "Guestbook", link: "/guestbook" },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: "instagram", link: "https://instagram.com/ievatolga" },
    ],
  },
  locales: {
    root: {
      label: "💍 English",
      lang: "en",
    },
    lt: {
      label: "🇱🇹 Lithuanian",
      lang: "lt", // optional, will be added  as `lang` attribute on `html` tag
      link: "/lt/", // default /fr/ -- shows on navbar translations menu, can be external
      themeConfig: {
        nav: [
          { text: "Pagrindinis puslapis", link: "/lt/" },
          { text: "Kelionė", link: "/lt/travel" },
          { text: "Vieta", link: "/lt/location" },
          { text: "Programa", link: "/lt/info" },
          { text: "Svečių knyga", link: "/lt/guestbook" },
        ],
      },
      // other locale specific properties...
    },
    tr: {
      label: "🇹🇷 Türkçe",
      lang: "tr", // optional, will be added  as `lang` attribute on `html` tag
      link: "/tr/", // default /fr/ -- shows on navbar translations menu, can be external
      themeConfig: {
        nav: [
          { text: "Anasayfa", link: "/tr/" },
          { text: "Ulaşım", link: "/tr/travel" },
          { text: "Hooge Vuursche Kalesi", link: "/tr/location" },
          { text: "O gün!", link: "/tr/info" },
          { text: "Ziyaretçi Defteri", link: "/tr/guestbook" },
        ],
      },
    },
  },
});

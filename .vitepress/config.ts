import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Celebrate with us!",
  description: "We are getting married",
  cleanUrls: true,
  srcDir: "src",
  locales: {
    root: {
      label: "💍 English",
      lang: "en",
    },
    tr: {
      label: "🇹🇷 Türkçe",
      lang: "tr", // optional, will be added  as `lang` attribute on `html` tag
      link: "/tr", // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
    lt: {
      label: "🇱🇹 Lietuvių",
      lang: "lt", // optional, will be added  as `lang` attribute on `html` tag
      link: "/lt", // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
  },
  appearance: false,
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Welcome", link: "/" },
      { text: "RSVP", link: "/rsvp" },
      { text: "Venue & Schedule", link: "/venue" },
      { text: "Traveling", link: "/travel" },
      { text: "Gifts", link: "/gifts" },
      { text: "Our Story", link: "/story" },
      { text: "Guestbook", link: "/guestbook" },
    ],

    sidebar: [
      { text: "Welcome", link: "/" },
      { text: "Venue & Schedule", link: "/venue" },
      { text: "Traveling", link: "/travel" },
      { text: "Gifts", link: "/gifts" },
      { text: "Our Story", link: "/story" },
      { text: "RSVP", link: "/rsvp" },
      { text: "Guestbook", link: "/guestbook" },
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
    ],

    socialLinks: [
      { icon: "instagram", link: "https://instagram.com/kucukkanat" },
    ],
  },
});

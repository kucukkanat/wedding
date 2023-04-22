import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "We are getting married",
  srcDir: "src",
  appearance: false,
  cleanUrls: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Venue', link: '/venue' }
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
      { icon: 'instagram', link: 'https://instagram.com/ievatolga' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'Lithuanian',
      lang: 'lt', // optional, will be added  as `lang` attribute on `html` tag
      link: '/lt' // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
    tr: {
      label: 'Türkçe',
      lang: 'tr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/tr', // default /fr/ -- shows on navbar translations menu, can be external
      
    }
  }
})

// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import MuisjesTogether from './MuisjesTogether.vue'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
        'home-hero-image': () => h(MuisjesTogether)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // app.component('MuisjesTogether', MuisjesTogether)
  }
}

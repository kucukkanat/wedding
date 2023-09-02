// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './font.css'
import "animate.css"
import "lightgallery/css/lightgallery-bundle.min.css";
import Custom404 from "../../src/404.vue"

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "not-found": () => h(Custom404),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

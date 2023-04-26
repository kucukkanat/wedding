---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# hero:
#   name: "Celebrate with us"
#   text: "We are getting married"
#   tagline: My great project tagline
#   actions:
#     - theme: brand
#       text: Markdown Examples
#       link: /markdown-examples
#     - theme: alt
#       text: API Examples
#       link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
  import HeartbeatKiss from "../components/HeartbeatKiss.vue";
  import CoolHeader from "../components/CoolHeader.vue";
  import Footer from "../components/Footer.vue";
</script>

<style>
  .root #main-wrapper{
    background-image: url(/grid_0.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  </style>
<div class="root">
<HeartbeatKiss/>
<Footer lang="lt"/>
</div>




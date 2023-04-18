---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Celebrate with us!"
  text: "We are getting married!"
  tagline: July 23rd, 2023
  image: kiss_rasterized.png
  actions:
    - theme: brand
      text: RSVP
      link: /rsvp
    - theme: alt
      text: ✈️ How to travel?
      link: /travel

# features:
#   - title: Feature A image
#     details: <img src="" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
  import "animate.css"
  // import Muisje from "./components/muisje.vue"
</script>
<MuisjesTogether />
<div class="flex horizontal">
  <!-- <div style="position:relative;bottom: -40px;">
    <svg style="margin:0 auto;overflow:visible" width="395" height="51" viewBox="0 0 395 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path style="fill:transparent" id="curve" d="M1 50.5C1 50.5 46 1 196 1C351 1 394.5 50.5 394.5 50.5" />
    <text fill="#000" class="handwriting bold" style="font-size: 40px;">
        <textPath startOffset="20" alignment-baseline="top" xlink:href="#curve" fill="#777D7C">
          Celebrate With Us!
        </textPath>
      </text>
    </svg>
  </div> -->
  <div style="width:80vw;">
    <img src="kiss_rasterized.png" />
    <div style="text-align:center;">
    <img src="flowers1.png" class="animate__animated animate__pulse animate__infinite animate__slower " style="display:inline-block;position:relative;width:100vw;top:-20vw;" />
    </div>
  </div>
</div>

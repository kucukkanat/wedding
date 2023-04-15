---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Celebrate with us!"
  text: "We are getting married"
  tagline: July 23rd, 2023
  image: https://cdn.midjourney.com/0bf433ec-3827-4cc4-93f0-53d81b1f9a0e/grid_0.png
  actions:
    - theme: brand
      text: RSVP
      link: /rsvp
    - theme: alt
      text: ✈️ How to travel?
      link: /travel

features:
  - title: Feature A image
    details: <img src="" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<span v-for="i in 3">{{ i }}</span>

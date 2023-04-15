---
title: Venue
layout: home
hero:
  name: Kasteel Hooge Vuursche
  text: The venue
  image: https://www.toptrouwlocaties.nl/Uploads/Cache/Files/200217154642.Foto-chan-buiten-hv-WEB.resized.1280x0.jpg
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

# Kasteel Hooge Vuursche

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

<style scoped>
.frame {
    border: 1px solid #ddd;
    margin: 5px;
    width: 150px;
    height: 150px;
    display: inline-block;
}
.photo-bg {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: all .5s;
}
.photo-bg:hover {
    transform: scale(1.2)
}
</style>

<script setup>

const props = defineProps({
  lang: {
    type: String,
    default: "en",
  },
});

const host = location.hostname.includes("localhost") ? 'https://pub-20ba7c13b51c498984730471c657d3ff.r2.dev' : 'https://picture-bucket.ievaandtolga.com'

const INDEX_OF_PHOTO_CONTAINING_SENSITIVE_INFO1=115
const photos = Array.from(Array(471).keys()).map(
  (i) => ({
    bg: `background-image: url(${host}/thumb_${i}.jpg)`,
    image: `${host}/${i}.jpg`
  })
).slice(1)
photos.splice(INDEX_OF_PHOTO_CONTAINING_SENSITIVE_INFO1,1);


</script>

<template>
  <div id="wrapper">
    <a v-for="photo in photos" :href=" photo.image ">
    <div class="frame">
        <div class="photo-bg" :style=" photo.bg "></div>
    </div>
</a>
  </div>
</template>

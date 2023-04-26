<script setup>
import CoolHeader from "./CoolHeader.vue";
import CTA from "./CTA.vue"
import { withBase } from "vitepress";
const imageURL = withBase("/hoogevuursche1.jpeg")
const infoURL = withBase("/info")
const props = defineProps({
        lang: {
            type: String,
            default: 'en'
        }
    })
const data =  {
            en: {
                DATE: "July 23rd, 2023",
                MORE: "More Information"
            },
            lt: {
                DATE: "Liepos 23, 2023",
                MORE: "Daugiau Informacijos"
            },
            tr: {
                DATE: "23 Haziran 2023",
                MORE: "Detaylar"

            }
        }
    


</script>
<style scoped>
h1,
a {
    line-height: 1em;
    margin: 15px 0px;
}

h1 {
    font-size: 6vw;
    text-shadow: 0px 0px 5px #000
}
</style>
<template>
    <CoolHeader :imageUrl="imageURL">
        <h1> Kasteel de Hooge Vuursche </h1>
        <h1> {{ data[props.lang]["DATE"] }} </h1>
        <div>
            <CTA :url="infoURL">{{ data[props.lang]["MORE"] }} </CTA>
        </div>

    </CoolHeader>
</template>